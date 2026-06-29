export function apiOk(data: unknown, meta?: Record<string, unknown>, init?: ResponseInit) {
  return Response.json({ ok: true, data, meta: meta || {} }, init);
}

export function apiFail(errorCode: string, message: string, status = 400, fieldErrors?: Record<string, string>) {
  return Response.json(
    {
      ok: false,
      error_code: errorCode,
      message,
      field_errors: fieldErrors || {}
    },
    { status }
  );
}

export function apiNotReady(moduleName: string) {
  return apiFail(
    'MODULE_NOT_READY',
    moduleName + ' is wired as an API contract, but live database implementation is not connected yet.',
    501
  );
}
