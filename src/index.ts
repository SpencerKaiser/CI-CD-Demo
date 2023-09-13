import express from 'express';
import { env } from './env';
import { api } from './api';
import { logger } from './utils/logger';

const app = express();

const port = Number(env.port ?? '') || 3000;
const dev = env.nodeEnv === 'development';

void (async () => {
  logger.info('App starting...');

  // ~~~~~~~~~~ API ~~~~~~~~~~
  app.use(
    '/api', // All routes that start with `/api` but not followed by `/auth`
    api,
  );
})()
  .then(() => {
    app.listen(port, () => {
      logger.info(`🚀 Listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    logger.error('App failed to start: ', error);
  });
