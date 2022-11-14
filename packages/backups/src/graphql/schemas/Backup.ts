import { mutationField, objectType, queryField } from "nexus";
import { Context } from "../../context";

export const backup = objectType({
    name: 'Backup',
    definition(t) {
        t.int('id', { description: 'Id of the backup' })
        t.string('name', { description: 'Name of the backup' })
    }, 
});

export const getBackupQuery = queryField("getBackup", {
    type: "Backup",
    resolve: (_, __, ctx: Context) => ctx.backup,
});