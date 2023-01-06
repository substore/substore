import { ApolloServer } from "apollo-server-express";
import { makeSchema } from "nexus";
import { Context, getContext } from "../context";
import * as Store from "./schema/Store"
import * as User from "./schema/User";

export const schema = makeSchema({
  types: [User, Store],
});

export const gqlServer = new ApolloServer({
  schema,
  context: ({ req }): Context => {
    return getContext(req);
  },
});
