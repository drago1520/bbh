import { Block } from 'payload';

export const Gallery7Block: Block = {
  slug: 'gallery7',
  interfaceName: 'Gallery7Props',
  labels: {
    singular: 'Вътряща Галерия минали събития - Главна стр.',
    plural: 'Въртящи Галерии с минали събития - Главна стр.',
  },
  fields: [
    {
      type: 'text',
      name: 'heading',
      label: 'Заглавие',
      required: true,
    },
    {
      type: 'upload',
      relationTo: 'media',
      name: 'images',
      hasMany: true,
      label: 'Снимки от събитието',
      required: true,
    },
    {
      type: 'richText',
      name: 'descr',
      label: 'Описание',
    },
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'ctaText',
          label: 'CTA',
        },
        {
          type: 'text',
          name: 'ctaHref',
          label: 'CTA Url',
        },
        {
          type: 'number',
          name: 'rotateSpeed',
          label: 'Скорост на въртене',
          min: 0,
          admin: {
            width: '15%',
          },
        },
      ],
    },
  ],
};
