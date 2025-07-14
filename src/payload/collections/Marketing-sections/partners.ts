import { PartnersBlock } from '@/payload/blocks/Partners/partners-block';
import { CollectionConfig } from 'payload';

export const MarketingSectionsCollection: CollectionConfig = {
  slug: 'marketing-sections',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'Partners',
          fields: [
            {
              name: 'partners',
              type: 'blocks',
              blocks: [PartnersBlock],
              maxRows: 1,
            },
          ],
        },
      ],
    },
  ],
};
