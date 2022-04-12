import dotenv from 'dotenv';
import app from './app';
dotenv.config();

const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('Server listening on port ' + port);
});