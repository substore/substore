import { Router } from "express";
import passport from "passport";
import { githubStrat } from "../auth";

export const authRouter: Router = Router();
passport.use(githubStrat);

authRouter.get(
  "/auth",
  passport.authenticate("github", {
    scope: ["user:email"],
  }),
);

authRouter.get(
  "/auth/callback",
  passport.authenticate("github", {
    successRedirect: "http://a.localhost:4000/graphql",
    failureRedirect: "http://a.localhost:4000/l",
  }),
);
