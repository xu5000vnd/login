import CustomError from './custom-error';

class UnauthenticateError extends CustomError {
  statusCode = 401;

  constructor(message) {
    super("Unauthenticate Error");
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default UnauthenticateError;
