import CustomError from '../common/errors/custom-error';

export default (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).send({ errors: [{ message: 'Unauthorized Error' }] });
  }

  console.log(12, err);

  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
