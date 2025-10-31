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
      label: 'Заглавие на секция',
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
          name: 'icon',
          type: 'text',
          label: 'Име на иконка от Lucide React',
          admin: {
            description: 'https://lucide.dev/icons/ > копирайте името (kebap case)',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Заглавие на панел',
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
