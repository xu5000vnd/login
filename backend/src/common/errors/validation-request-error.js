import CustomError from './custom-error';

class ValidationRequestError extends CustomError {
  errors = [];
  statusCode = 422;

  constructor(errors) {
    super('Invalid request parameters');
    this.errors = errors;
  }

  serializeErrors() {
    return this.errors.details.map(item => {
      return { message: item.message, field: item.context.key };
    });
  }
}

export default ValidationRequestError;
