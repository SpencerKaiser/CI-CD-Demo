import { Request, Response } from 'express';
import { logger } from '../../utils/logger';

export const get = async (req: Request, res: Response) => {
  if (req.body.number > 0.5) {
    logger.info('greater than .5');
  }

  res.status(200).send({
    ok: true,
    hello: 'woirld',
  });
};
