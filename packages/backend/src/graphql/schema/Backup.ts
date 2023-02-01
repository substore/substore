/*
import {
    list,
    enumType,
    mutationField,
    nonNull,
    objectType,
    queryField,
    stringArg,
  } from "nexus";
import { Backup } from "nexus-prisma";
import { Context } from "../../context";

  export const backup = objectType({
    name: Backup.$name,
    description: Backup.$description,
    definition(t) {
        t.field(Backup.id);
        t.field(Backup.name);
        t.field(Backup.store);
        t.field(Backup.storeId);
        t.field(Backup.createdAt);
    },
})

export const createBackupMutation = mutationField("createStore", {
    type: backup,
})

export const deleteBackupMutation = mutationField("deleteBackup", {
    type: "Boolean",
    args: {
        name: nonNull(stringArg()),
    },
    resolve: async (_, { name }, ctx: Context) => {
        if (!ctx.user) {
            return;
        }

        try {
            const backup = await ctx.db.backup.findFirst({
                where: {
                    name,
                },
            });
            if (!backup) {
                return;
            }
            await    
        }
    }
})
*/