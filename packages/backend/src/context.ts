import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import { client } from "./db";

export const getContext = (req: Request): Context => {
  return {
    user: req.user,
    req: req,
    db: client,
  };
};

export interface Context {
  user?: Express.User;
  req: Request;
  db: PrismaClient;
}
