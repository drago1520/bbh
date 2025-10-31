import { authenticated } from '@/payload/auth/authenticated';
import { CollectionConfig } from 'payload';

export const Attendees: CollectionConfig = {
  slug: 'attendees',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
      unique: true,
      index: true,
    },
    {
      name: 'phone',
      type: 'text',
      unique: true,
    },
  ],
  timestamps: true,
  admin: {
    defaultColumns: ['name', 'email', 'phone'],
    useAsTitle: 'email',
    listSearchableFields: ['email', 'name', 'phone'],
  },
};
