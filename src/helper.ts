import { Request, Response, NextFunction, RequestHandler } from "express";
import { AnySchema } from "yup";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(err.statusCode || 500).send({ message: err.message });
};

const validateHandler =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(
        {
          body: req.body,
          query: req.query,
          params: req.params,
        },
        { strict: true, abortEarly: false },
      );
      return next();
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };

export { errorHandler, validateHandler };
