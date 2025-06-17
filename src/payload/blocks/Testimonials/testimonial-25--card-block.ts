import { Block } from 'payload';

export const Testimonial25CardBlock: Block = {
  slug: 'testimonial25CardBlock',
  interfaceName: 'Testimonial25CardProps',
  labels: {
    singular: 'Ревю на клиент',
    plural: 'Ревюта на клиенти',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Снимка',
      required: true,
    },
    {
      name: 'quote',
      type: 'text',
      label: 'Цитат на клиента',
      required: true,
      admin: {
        placeholder: "We're misusing Mainline as a CRM and it still works!",
      },
    },
    {
      name: 'author',
      type: 'text',
      label: 'Име на клиент',
      required: true,
      admin: {
        placeholder: 'Amy Chase',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'role',
          type: 'text',
          label: 'Роля на клиента в компанията',
          required: true,
          admin: {
            placeholder: 'Lead Engineer',
          },
        },
        {
          name: 'company',
          type: 'text',
          label: 'Компания',
          required: true,
          admin: {
            placeholder: 'Mercury Finance',
          },
        },
      ],
    },
  ],
};
