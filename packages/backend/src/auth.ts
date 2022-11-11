import { User } from "@prisma/client";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { v4 } from "uuid";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "./constant";
import { prisma } from "./db";

// declare Express.User
declare global {
  namespace Express {
    interface User {
      id: string;
      name: string;
      email: string;
      github: string;
    }
  }
}

passport.serializeUser(async (user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const users = await prisma.user.findMany();
  const matchingUser = users.find((user: User) => user.id === id);
  done(null, matchingUser);
});

export const githubStrat = new GitHubStrategy(
  {
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/callback",
    scope: ["user:email"],
  },
  async (
    _accessToken: string,
    _refreshToken: string,
    profile: passport.Profile,
    done: (err: any, user?: Express.User) => void,
  ) => {
    const users = await prisma.user.findMany();
    const matchingUser = users.find(
      (user: User) => user.github === profile.username,
    );
    if (matchingUser) {
      return done(null, matchingUser);
    }

    if (!profile.emails) {
      return done(new Error("No email found"));
    }

    const newUser = {
      id: v4(),
      github: profile.username ?? profile.displayName,
      name: profile.displayName,
      email: profile.emails[0].value,
    };
    await prisma.user.create({
      data: newUser,
    });
    return done(null, newUser);
  },
);
