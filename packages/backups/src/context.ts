import { Request } from "express";

export const getContext = (req: Request): Context => {
  return {
    user: req.user,
    req: req,
  };
};

export interface Context {
  backup: any;
  user?: Express.User;
  req: Request;
}
