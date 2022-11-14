import { ApolloServer } from "apollo-server-express";
import { makeSchema } from "nexus";
import { Context, getContext } from "../context";

export const schema = makeSchema({
    types: [],
});

export const gqlServer = new ApolloServer({
    schema,
    context: ({ req }): Context => {
        return getContext(req);
    }
})