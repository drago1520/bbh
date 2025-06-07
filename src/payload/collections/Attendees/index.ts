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
      required: true,
      index: true,
    },
    {
      name: 'name',
      type: 'text',
      index: true,
    },
  ],
  timestamps: true,
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'email',
    listSearchableFields: ['email', 'name'],
  },
};
