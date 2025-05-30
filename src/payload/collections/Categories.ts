import type { CollectionConfig } from 'payload';

import { anyone } from '@/payload/auth/anyone';
import { authenticated } from '@/payload/auth/authenticated';
import { slugField } from '@/payload/fields/slug';

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
  ],
};
