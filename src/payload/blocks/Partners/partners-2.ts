import { Block } from 'payload';

export const Partners2Block: Block = {
  slug: 'partners2',
  labels: {
    singular: 'Партньори2',
    plural: 'Партньори2',
  },
  interfaceName: 'Partners2Props',

  fields: [
    {
      name: 'subtitle',
      type: 'text',
      label: 'Подзаглавие',
    },
    {
      name: 'images',
      label: 'Лого-та на компании',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: true,
    },
  ],
};
