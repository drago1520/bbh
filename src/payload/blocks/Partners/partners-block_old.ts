import { Block } from 'payload';

export const PartnersBlock: Block = {
  slug: 'partners',
  labels: {
    singular: 'Партньори',
    plural: 'Партньори',
  },
  interfaceName: 'PartnersProps',
  fields: [
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
