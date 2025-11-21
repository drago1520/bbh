import type { Access } from "payload";
import type { AccessArgs } from "payload";
import type { User } from "@/payload-types";

export const anyone: Access = () => true;

type isAuthenticated = (args: AccessArgs<User>) => boolean;

/**
 * @description This applies only to the admin panel.
 * @returns boolean Whether the admin user can CRUD
 */
export const authenticated: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user);
};

export const authenticatedOrPublished: Access = ({ req: { user } }) => {
  if (user) {
    return true;
  }

  return {
    _status: {
      equals: "published",
    },
  };
};
