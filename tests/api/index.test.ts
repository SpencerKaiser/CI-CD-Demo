import express, { Request, Response } from 'express';
import supertest from 'supertest';
import { getMock } from '../testUtils/getMock';
import { health } from '../../src/api/health';

jest.mock('../../src/api/health', () => ({
  health: jest.fn((req: Request, res: Response) => res.sendStatus(200)),
}));
const mockHealth = getMock(health);

describe('/api route registration', () => {
  it('registers a generic catch-all handler', async () => {
    await jest.isolateModulesAsync(async () => {
      const { api } = await import('../../src/api');
      const app = express();
      app.use(api);

      const res = await supertest(app).get('/garbageRoute');

      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual(
        expect.objectContaining({
          error: 'API route not found',
        }),
      );
    });
  });

  it('registers unauthed handlers', async () => {
    await jest.isolateModulesAsync(async () => {
      const { api } = await import('../../src/api');
      const app = express();
      app.use(api);
      await supertest(app).get('/health');
      expect(mockHealth).toBeCalledTimes(1);
    });
  });
});
