import express, { Request, Response } from 'express';
import bodyParcer from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParcer.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdfljk'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
