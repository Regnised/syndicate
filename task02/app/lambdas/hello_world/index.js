
exports.handler = async (event) => {
  if (event.requestContext.http.path === '/hello' && event.requestContext.http.method === 'GET') {
    return {
      statusCode: 200,
      message: 'Hello from Lambda',
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ statusCode: 400, message: `Bad request syntax or unsupported method. Request path: ${event.requestContext.http.path}. HTTP method: ${event.requestContext.http.method}` })
    };
  }
};
