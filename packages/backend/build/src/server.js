"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_fastify_1 = require("apollo-server-fastify");
const apollo_server_core_1 = require("apollo-server-core");
const context_1 = require("../context");
const schema_1 = require("../schema");
const fastify_1 = __importDefault(require("fastify"));
function fastifyAppClosePlugin(app) {
    return {
        serverWillStart() {
            return __awaiter(this, void 0, void 0, function* () {
                return {
                    drainServer() {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield app.close();
                        });
                    },
                };
            });
        },
    };
}
function startApolloServer({}) {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, fastify_1.default)();
        const server = new apollo_server_fastify_1.ApolloServer({
            schema: schema_1.schema,
            context: context_1.context,
            csrfPrevention: true,
            cache: 'bounded',
            plugins: [
                fastifyAppClosePlugin(app),
                (0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer: app.server }),
                (0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)({ embed: true }),
            ],
        });
        yield server.start();
        app.register(server.createHandler());
        yield app.listen(4000);
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    });
}
startApolloServer(schema_1.schema);
