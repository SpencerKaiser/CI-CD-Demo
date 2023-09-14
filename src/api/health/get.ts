import { Request, Response } from 'express';

export const get = async (req: Request, res: Response) => {
  if (req.body.number > 0.5) {
    console.log('greater than .5');
  }

  res.status(200).send({
    ok: true,
    hello: 'woirld',
  });
};
