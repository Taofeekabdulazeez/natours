class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = this._getStatus();
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }

  _getStatus() {
    return `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
  }
}

module.exports = AppError;
