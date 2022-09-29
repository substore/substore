"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_fastify_1 = require("apollo-server-fastify");
const apollo_server_core_1 = require("apollo-server-core");
const context_1 = require("../prisma/context");
const fastify_1 = __importDefault(require("fastify"));
function fastifyAppClosePlugin(app) {
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
async function startApolloServer(typeDefs, resolvers) {
    const app = (0, fastify_1.default)();
    const server = new apollo_server_fastify_1.ApolloServer({
        typeDefs,
        resolvers,
        context: context_1.context,
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
            fastifyAppClosePlugin(app),
            (0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer: app.server }),
            (0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)({ embed: true }),
        ],
    });
    await server.start();
    app.register(server.createHandler());
    await app.listen(3000);
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
}
