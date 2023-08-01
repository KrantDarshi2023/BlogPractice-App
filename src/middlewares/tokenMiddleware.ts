import jwt, { Secret } from "jsonwebtoken";
import createError from "http-errors";
import * as dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
dotenv.config();
export const authorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers["authorization"] as String;
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY as Secret);
    next();
  } catch (error) {
    next(createError(403, new Error("Not Authorized")));
  }
};
