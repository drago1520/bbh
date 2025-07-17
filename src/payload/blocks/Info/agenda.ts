import { Block } from 'payload';

export const AgendaBlock: Block = {
  slug: 'agenda',
  labels: {
    singular: 'Програма',
    plural: 'Програма',
  },
  interfaceName: 'AgendaProps',
  fields: [
    {
      name: 'title',
      label: 'Заглавие',
      type: 'text',
    },
    {
      name: 'items',
      label: 'Елементи от програмата',
      type: 'array',
      admin: {
        description: 'Добавете елементи от програмата с заглавие и описание',
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
