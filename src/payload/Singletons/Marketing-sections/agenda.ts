import { CollectionConfig } from 'payload';

export const AgendaCollection: CollectionConfig = {
  slug: 'agendaN',
  labels: {
    singular: 'Agenda 6 карти',
    plural: 'Agenda 6 карти',
  },
  admin: {
    hidden: true,
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'title',
      label: 'Заглавие',
      type: 'text',
    },
    {
      type: 'text',
      name: 'label',
      label: 'Вътрешен етикет',
      defaultValue: 'Agenda конф.',
      required: true,
    },
    {
      name: 'items',
      label: 'Елементи от програмата',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Заглавие',
          required: true,
          admin: {
            placeholder: 'Откриване на конференцията',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Описание',
          admin: {
            placeholder: 'Кратко описание на събитието или темата',
          },
        },
      ],
      minRows: 1,
      maxRows: 6,
      required: true,
    },
  ],
};
