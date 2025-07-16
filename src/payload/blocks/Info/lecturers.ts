import { Block } from 'payload';

export const LecturersBlock: Block = {
  slug: 'lecturers',
  labels: {
    singular: 'Лектори',
    plural: 'Лектори',
  },
  interfaceName: 'LecturersProps',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заглавие',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Подзаглавие',
    },
    {
      name: 'lecturers',
      type: 'array',
      label: 'Лектори',
      admin: {
        initCollapsed: true,
      },
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Име',
          required: true,
          admin: {
            placeholder: 'Давид Форен',
          },
        },
        {
          name: 'role',
          type: 'text',
          label: 'Роля',
          admin: {
            placeholder: 'Основател / Изпълнителен директор',
          },
        },
        {
          name: 'bio',
          type: 'text',
          label: 'Биография',
          admin: {
            placeholder: 'Аз съм амбициозен работоголик, но освен това доста обикновен човек.',
          },
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Снимка',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};
