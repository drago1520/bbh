import { Block } from 'payload';

export const TimelineBlock: Block = {
  slug: 'timeline',
  labels: {
    singular: 'Програма за конференцията',
    plural: 'Програма за конференцията',
  },
  interfaceName: 'ConfTimelineProps',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заглавие',
      required: true,
      admin: {
        placeholder: 'Програма на конференцията',
      },
    },
    {
      name: 'steps',
      type: 'array',
      label: 'панели на конференцията',
      required: true,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Заглавие на стъпка',
          required: true,
          admin: {
            placeholder: 'Изследване',
          },
        },
        {
          name: 'description',
          type: 'text',
          label: 'Описание',
          admin: {
            placeholder: 'Събиране на информация и анализиране на изискванията...',
          },
        },
      ],
    },
  ],
};
