import { PartnersBlock } from '@/payload/blocks/Partners/partners-block_old';
import { CollectionConfig } from 'payload';

export const PartnersCollection: CollectionConfig = {
  slug: 'partners',
  labels: {
    singular: 'Секция партньори',
    plural: 'Секции партньори',
  },
  fields: [
    {
      name: 'partners',
      type: 'blocks',
      blocks: [PartnersBlock],
      maxRows: 1,
      required: true,
    },
  ],
};
