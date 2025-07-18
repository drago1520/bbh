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
    },
    {
      name: 'name',
      type: 'text',
      index: true,
    },
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'events',
    },
  ],
  timestamps: true,
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'email',
    listSearchableFields: ['email', 'name'],
  },
};
