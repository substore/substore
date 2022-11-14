import express from "express";
import { gqlServer } from "../graphql";

const app = express();

export const initServer = async () => {
    await gqlServer.start();
    gqlServer.applyMiddleware({ app});
    app.listen({ port: 4000}, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`)
    })
}