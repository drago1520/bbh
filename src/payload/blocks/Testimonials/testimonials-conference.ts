import { Block } from 'payload';

export const Testimonials2Block: Block = {
  slug: 'testimonials2',
  interfaceName: 'Testimonials2Props',
  labels: {
    singular: 'Препоръки Конференция',
    plural: 'Препоръки Конференция',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заглавие',
      required: true,
      admin: {
        placeholder: 'Какво казват нашите клиенти',
      },
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Подзаглавие',
      admin: {
        placeholder: 'Реални истории от доволни клиенти',
      },
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Препоръки',
      labels: {
        singular: 'Препоръка',
        plural: 'Препоръки',
      },
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          label: 'Цитат',
          required: true,
          admin: {
            placeholder: 'Невероятно обслужване! Препоръчвам на всички...',
          },
        },
        {
          name: 'clientName',
          type: 'text',
          label: 'Име на клиента',
          required: true,
          admin: {
            placeholder: 'Иван Петров',
          },
        },
        {
          name: 'clientImg',
          type: 'upload',
          label: 'Снимка на клиента',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Портретна снимка на клиента',
          },
        },
        {
          name: 'workTitle',
          type: 'text',
          label: 'Длъжност',
          admin: {
            placeholder: 'Управляващ директор',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Титла',
          admin: {
            placeholder: 'Д-р, Инж., Проф.',
          },
        },
        {
          name: 'badge',
          type: 'text',
          label: 'Значка',
          admin: {
            placeholder: 'VIP клиент, Партньор',
          },
        },
        {
          name: 'cardImg',
          type: 'upload',
          label: 'Голяма снимка на секцията',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Най-голямата снимка, която стои от другата страна на цитата',
          },
        },
      ],
    },
  ],
};
