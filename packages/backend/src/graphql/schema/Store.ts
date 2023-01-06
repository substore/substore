import { list, enumType, mutationField, nonNull, objectType, queryField, stringArg } from "nexus";

import { Store, StoreType } from "nexus-prisma";
import { Context } from "../../context";
import { randomBytes } from "crypto";
import { deprovision, provision } from "../../../../provisioner/src";
import { providers } from "../../provider";
import { StoreType as PrismaStoreType } from "@prisma/client";

export const store = objectType({
    name: Store.$name,
    description: Store.$description,
    definition(t) {
        t.field(Store.id);
        t.field(Store.name);
        t.field(Store.type);
        t.field(Store.url);
    },
});

export const storeType = enumType(StoreType);

export const createStoreMutation = mutationField("createStore", {
    type: store,
    args: {
        type: nonNull(storeType),
    },

    resolve: async (_, { type }: { type: PrismaStoreType }, ctx: Context) => {
        if (!ctx.user) {
            return;
        }

        const config = providers.get(type);
        if (!config) {
            return;
        }

        const password = randomBytes(9).toString("hex");
        const storeApp = await provision({
            image: config.image,
            secrets: [
                {
                    key: config.password,
                    value: password,
                },
            ],
            disk: {
                size: 1,
                destination: config.data,
            },
            network: {
                port: config.port,
                internalPort: config.port,
            },
        });

        const store = await ctx.db.store.create({
            data: {
              name: storeApp,
              type: type,
              url: `${config.protocol}://${config.username}:${password}@${storeApp}.fly.dev:${config.port}/${config.dbName}`,
              userId: ctx.user.id,
            },
          });
          return store;
    },
});

export const deleteStoreMutation = mutationField("deleteStore", {
    type: "Boolean",
    args: {
        name: nonNull(stringArg()),
    },
    resolve: async (_, { name }, ctx: Context) => {
        if (!ctx.user) {
            return;
        }

        try {
            const store = await ctx.db.store.findFirst({
                where: {
                    name,
                    userId: ctx.user.id,
                },
            });
            if (!store) {
                return;
            }

            await deprovision(name);
            await ctx.db.store.delete({
                where: {
                  name,
                },
            });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },
});

export const storesQuery = queryField("stores", {
    type: list(store),
    args: {
      name: nonNull(stringArg()),
    },
    resolve: async (_, { name }, ctx: Context) => {
      if (!ctx.user) {
        return;
      }
      const stores = await ctx.db.store.findUnique({
        where: {
          name,
        },
      });
      return stores;
    },
})

export const storeQuery = queryField("store", {
    type: store,
    args: {
        name: nonNull(stringArg()),
    },
    resolve: async (_, { name }, ctx: Context) => {
        if (!ctx.user) {
            return;
        }
        const store = await ctx.db.store.findUnique({
            where: {
                name,
            },
        });
        return store;
    }
})