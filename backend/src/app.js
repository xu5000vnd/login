import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import cookieSession from 'cookie-session';
import router from './routes';
import jwt from './middleware/jwt';
import authentication from './middleware/authentication';
import errorHandler from './middleware/error-handler';
import { NotFoundError } from './common/errors';

const app = express();

app.use(cors());
// fix error in axios
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(json({ limit: '50mb', extended: true }));
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
app.use(jwt());
app.use(authentication);
app.use('/api', router);
app.all('*', async (req, res, next) => {
  try {
    throw new NotFoundError();
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

export default app;