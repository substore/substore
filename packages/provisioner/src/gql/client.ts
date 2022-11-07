import { getSdk } from "./sdk";
import { GraphQLClient } from "graphql-request";
import { FLY_API_TOKEN } from "../constant";

const graphQLClient = new GraphQLClient("https://api.fly.io/graphql", {
  headers: {
    authorization: `Bearer ${FLY_API_TOKEN}`,
  },
});

export const client = getSdk(graphQLClient);
