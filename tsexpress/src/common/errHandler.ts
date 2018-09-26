import {Request, Response, NextFunction} from 'express';
import createError from 'http-errors';

export let internalErr =  (err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
  console.log(err);
};

export let pageNotFoundErr = (req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
};
