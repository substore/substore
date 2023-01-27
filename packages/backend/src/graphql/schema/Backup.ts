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

export const store = objectType({
    name: Backup.$name,
    description: Backup.$description,
    definition(t) {
        t.field(Backup.id);
        t.field(Backup.name);
        t.field(Backup.store);
        t.field(Backup.storeId);
    },
})