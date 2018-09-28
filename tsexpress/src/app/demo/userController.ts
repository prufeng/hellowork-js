import {Request, Response} from 'express';

/* GET users listing. */
export let list = (req: Request, res: Response) => {
  res.send('respond with the user list here');
};
