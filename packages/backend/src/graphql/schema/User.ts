import { mutationField, objectType, queryField } from "nexus";
import { User } from "nexus-prisma";
import { Context } from "../../context";

export const user = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id);
    t.field(User.name);
    t.field(User.email);
    t.field(User.github);
  },
});

export const getUserQuery = queryField("getUser", {
  type: "User",
  resolve: (_, __, ctx: Context) => ctx.user,
});

export const logoutMutation = mutationField("logout", {
  type: "Boolean",
  resolve: (_, __, ctx: Context) => {
    try {
      ctx.req.logout((err) => {
        if (err) {
          throw new Error(err);
        }
      });
    } catch {
      return false;
    }
    return true;
  },
});
