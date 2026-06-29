const http = require('http');
const next = require('next');

const primaryPort = Number(process.env.PORT || 3000);
const fallbackPorts = [80, 3000, 8080].filter((port) => port !== primaryPort);

const app = next({ dev: false, port: primaryPort });
const handle = app.getRequestHandler();

function listenOn(server, port, host, label, options = {}) {
  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE' || error.code === 'EACCES') {
      console.warn(`${label} skipped on ${host}:${port}: ${error.code}`);
    } else {
      console.error(`${label} failed on ${host}:${port}`, error);
    }
  });

  server.listen({ port, host, ...options }, () => {
    console.log(`${label} ready on ${host}:${port}`);
  });
}

function listenOnBothFamilies(createServer, port, label) {
  listenOn(createServer(), port, '0.0.0.0', `${label} IPv4`);
  listenOn(createServer(), port, '::', `${label} IPv6`, { ipv6Only: true });
}

function startFallbackProxy(port) {
  listenOnBothFamilies(() => http.createServer((incoming, outgoing) => {
    const request = http.request(
      {
        host: '127.0.0.1',
        port: primaryPort,
        method: incoming.method,
        path: incoming.url,
        headers: incoming.headers
      },
      (response) => {
        outgoing.writeHead(response.statusCode || 500, response.headers);
        response.pipe(outgoing);
      }
    );

    request.on('error', () => {
      outgoing.statusCode = 502;
      outgoing.end('Upstream unavailable');
    });

    incoming.pipe(request);
  }), port, 'Fallback proxy');
}

app.prepare().then(() => {
  listenOnBothFamilies(() => http.createServer((request, response) => {
    handle(request, response);
  }), primaryPort, 'Next server');

  fallbackPorts.forEach(startFallbackProxy);
});
