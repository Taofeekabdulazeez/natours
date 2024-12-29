module.exports = function (error, request, response, next) {
  error.status = error.status || 'error';
  error.statusCode = error.statusCode || 500;

  response.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });

  next();
};
