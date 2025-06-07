import type { AccessArgs } from 'payload';

import type { User } from '@/payload-types';

type isAuthenticated = (args: AccessArgs<User>) => boolean;

/**
 * @description This applies only to the admin panel.
 * @returns boolean Whether the admin user can CRUD
 */
export const authenticated: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user);
};
