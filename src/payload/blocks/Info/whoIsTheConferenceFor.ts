import { Block } from 'payload';

export const WhoIsTheConfForBlock: Block = {
  slug: 'whoIsTheConfFor',
  labels: {
    singular: 'За кого е конференцията',
    plural: 'За кого е конференцията',
  },
  interfaceName: 'WhoIsTheConfForProps',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заглавие',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Подзаглавие',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Елементи',
      admin: {
        initCollapsed: true,
      },
      required: true,
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Икона',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Заглавие',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Описание',
          required: true,
        },
      ],
    },
  ],
};
