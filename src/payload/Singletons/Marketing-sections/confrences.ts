import { CollectionConfig } from 'payload';

export const ConfCollection: CollectionConfig = {
  slug: 'confrences',
  labels: {
    singular: 'Конференций',
    plural: 'Конференций',
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
      defaultValue: 'Конференций',
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
