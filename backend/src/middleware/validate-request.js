import { ValidationRequestError } from '../common/errors';

const validateRequest = (req, res, next) => {
  if (req._error) {
    throw new ValidationRequestError(req._error);
  }

  next();
}

export default validateRequest;
