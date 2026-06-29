const http = require('http');
const next = require('next');

const primaryPort = Number(process.env.PORT || 3000);
const fallbackPorts = [80, 3000, 8080].filter((port) => port !== primaryPort);

const app = next({ dev: false, port: primaryPort });
const handle = app.getRequestHandler();

function startFallbackProxy(port) {
  const proxy = http.createServer((incoming, outgoing) => {
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
  });

  proxy.on('error', (error) => {
    if (error.code === 'EADDRINUSE' || error.code === 'EACCES') {
      console.warn(`Fallback proxy skipped on ${port}: ${error.code}`);
    } else {
      console.error(`Fallback proxy failed on ${port}`, error);
    }
  });

  proxy.listen(port, () => {
    console.log(`Fallback proxy ready on port ${port}`);
  });
}

app.prepare().then(() => {
  const server = http.createServer((request, response) => {
    handle(request, response);
  });

  server.listen(primaryPort, () => {
    console.log(`Next server ready on port ${primaryPort}`);
    fallbackPorts.forEach(startFallbackProxy);
  });
});
