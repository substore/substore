import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import { prisma } from "./db";

export const getContext = (req: Request): Context => {
  return {
    user: req.user,
    req: req,
    db: prisma,
  };
};

export interface Context {
  user?: Express.User;
  req: Request;
  db: PrismaClient;
}
