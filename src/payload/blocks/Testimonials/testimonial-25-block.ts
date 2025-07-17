import { Block } from 'payload';
import { Testimonial25CardBlock } from './testimonial-25--card-block';

export const Testimonial25Block: Block = {
  slug: 'testimonial25Block',
  interfaceName: 'Testimonial25Props',
  labels: {
    singular: 'Ревю - Главна стр.',
    plural: 'Ревюта - Главна стр.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заглавие',
      required: true,
      admin: {
        placeholder: 'Trusted by product builders',
      },
    },
    {
      name: 'helperText',
      type: 'text',
      label: 'Подзаглавие',
      admin: {
        placeholder: 'Mainline is built on the habits that make the best product teams successful: staying focused, moving quickly, and always aiming for high-quality work.',
      },
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA',
      admin: {
        placeholder: 'Read our Customer Stories',
      },
    },
    {
      name: 'ctaHref',
      type: 'text',
      label: 'CTA Link',
      admin: {
        placeholder: '#',
      },
    },
    {
      name: 'blocks',
      type: 'blocks',
      required: true,
      blocks: [Testimonial25CardBlock],
      admin: {
        initCollapsed: true,
        description: 'Отделните ревюта на клиенти с цитат от тях и къде работят',
      },
    },
  ],
};
