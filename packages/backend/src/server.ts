import { ApolloServer } from 'apollo-server-fastify';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { ApolloServerPlugin } from 'apollo-server-plugin-base';
import { context } from "../prisma/context";
import fastify, { FastifyInstance } from 'fastify';

function fastifyAppClosePlugin(app: FastifyInstance): ApolloServerPlugin {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

async function startApolloServer(typeDefs: any, resolvers: any) {
  const app = fastify();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: context,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      fastifyAppClosePlugin(app),
      ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();
  app.register(server.createHandler());
  await app.listen(4000);
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}