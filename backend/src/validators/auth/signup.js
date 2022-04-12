import Joi from 'joi';

const validate = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });
  const validation = await schema.validate(req.body);
  req._error = validation.error;
  next();
};

export default validate;