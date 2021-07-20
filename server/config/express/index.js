import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import { urlencoded, json } from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import mongooseErrors from 'express-mongoose-errors';
import jsonErrorHandler from 'express-json-error-handler';
import inProduction from 'in-production';
import logger from 'env-bunyan';
import cors from 'cors';
import routes from './routes';

export default () => {
  const app = express();

  app.use(express.static(join(__dirname, '..', '..', '..', 'client')));
  app.use(cors());
  app.use(helmet());
  app.use(urlencoded({ extended: false }));
  app.use(json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(compression());

  if (!inProduction) {
    app.use(morgan('dev'));
  }

  routes(app);

  app.use(mongooseErrors());
  app.use(
    jsonErrorHandler({
      log({ err, req, res }) {
        logger.error({ err, req, res });
      }
    })
  );

  return app;
};
