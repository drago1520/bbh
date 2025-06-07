import { authenticated } from '@/payload/auth/authenticated';
import { CollectionConfig } from 'payload';

export const Events: CollectionConfig = {
  slug: 'events',
  fields: [
    {
      name: 'title',
      type: 'text',
      unique: true,
      index: true,
    },
    {
      name: 'type',
      type: 'radio',
      options: [
        {
          label: 'Networking',
          value: 'networking',
        },
        {
          label: 'Business breakfast',
          value: 'businessBreakfast',
        },
      ],
      required: true,
      index: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      index: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          timeIntervals: 15,
          displayFormat: 'dd MMM, yyyy HH:mm',
        },
      },
    },
    {
      name: 'active',
      type: 'radio',
      options: [
        {
          label: 'No',
          value: 'false',
        },
        {
          label: 'Yes',
          value: 'true',
        },
      ],
      defaultValue: 'true',
      required: true,
      index: true,
    },
  ],
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
};
