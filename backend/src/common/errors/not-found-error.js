import CustomError from './custom-error';

class NotFoundError extends CustomError {
  statusCode = 404;

  constructor(message) {
    super("Not Found");
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default NotFoundError;
