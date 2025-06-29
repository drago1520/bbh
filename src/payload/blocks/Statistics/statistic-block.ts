import { Block } from 'payload';

export const StatisticBlock: Block = {
  slug: 'statistic',
  fields: [
    {
      type: 'upload',
      relationTo: 'media',
      name: 'icon',
      label: 'Иконка към статистиката',
      admin: {
        description: 'Трябва поне да е 1:1. 48x48 px ще се рендерира.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          type: 'number',
          name: 'value',
          label: 'Стойност',
          required: true,
          admin: {
            placeholder: '50',
          },
        },
        {
          type: 'text',
          name: 'suffix',
          label: 'Знак след числото',
          admin: {
            placeholder: '%',
            description: 'Показва се точно до числото, а НЕ на нов ред като описанието.',
          },
        },
      ],
    },
    {
      type: 'text',
      name: 'description',
      label: 'Описание',
      required: true,
      admin: {
        placeholder: 'Нетуъркинг събития', //3 Ежегодни конференции,  100 души,
      },
    },
  ],
};
