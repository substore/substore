import connectRedis from "connect-redis";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import passport from "passport";
import { v4 } from "uuid";
import { PORT, REDIS_URL, SESSION_SECRECT } from "../constant";
import { gqlServer } from "../graphql";
import { authRouter } from "./auth";

const app = express();

const redisClient = new Redis(REDIS_URL);
const redisStore = connectRedis(session);

app.use(
  session({
    name: "substore.id",
    store: new redisStore({ client: redisClient as any }),
    genid: (_) => v4(),
    secret: SESSION_SECRECT,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/",
      sameSite: "lax",
      // domain: "localhost",
      secure: false,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(authRouter);

export const initServer = async () => {
  await gqlServer.start();
  gqlServer.applyMiddleware({ app });
  app.listen({ port: PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });
};
