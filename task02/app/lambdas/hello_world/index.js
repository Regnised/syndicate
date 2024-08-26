
exports.handler = async (event) => {
  if (event.requestContext.http.path === '/hello' && event.requestContext.http.method === 'GET') {
    const statusCode = 200;
    return {
      statusCode,
      body: JSON.stringify({ statusCode, message: 'Hello from Lambda' }),
    };
  } else {
    const statusCode = 400;
    return {
      statusCode,
      body: JSON.stringify({ statusCode, message: `Bad request syntax or unsupported method. Request path: ${event.requestContext.http.path}. HTTP method: ${event.requestContext.http.method}` })
    };
  }
};
