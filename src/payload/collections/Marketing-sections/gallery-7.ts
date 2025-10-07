import { CollectionConfig } from 'payload';

export const Gallery7Collection: CollectionConfig = {
  slug: 'homepageGallery',
  labels: {
    singular: 'Галерия',
    plural: 'Галерии',
  },
  admin: {
    hidden: true,
    useAsTitle: 'label',
  },
  fields: [
    {
      type: 'text',
      name: 'label',
      label: 'Вътрешен етикет',
      defaultValue: 'Секция галерия',
      required: true,
    },
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
      label: 'Изображения',
      hasMany: true,
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
          label: 'CTA текст',
        },
        {
          type: 'text',
          name: 'ctaHref',
          label: 'CTA линк',
        },
        {
          type: 'number',
          name: 'rotateSpeed',
          label: 'Скорост на ротация',
          min: 0,
          admin: {
            width: '15%',
          },
        },
      ],
    },
  ],
};
