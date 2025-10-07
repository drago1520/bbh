import { Partners2Block } from '@/payload/blocks/Partners/partners-2_old';
import { PartnersBlock } from '@/payload/blocks/Partners/partners-block_old';
import { CollectionConfig } from 'payload';

export const MarketingSectionsCollection: CollectionConfig = {
  slug: 'marketing-sections',
  labels: {
    singular: 'Маркетинг секция',
    plural: 'Маркетинг секции',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'Partners',
          label: 'Партньори',
          fields: [
            {
              name: 'partners',
              type: 'blocks',
              blocks: [PartnersBlock],
              maxRows: 1,
              required: true,
            },
          ],
        },
        {
          name: 'Partners2',
          label: 'Партньори карусел',
          fields: [
            {
              name: 'partners2',
              type: 'blocks',
              blocks: [Partners2Block],
              maxRows: 1,
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
