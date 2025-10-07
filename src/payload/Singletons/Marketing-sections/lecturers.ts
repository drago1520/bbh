import { CollectionConfig } from 'payload';

export const LecturersCollection: CollectionConfig = {
  slug: 'lecturersN',
   labels: {
    singular: 'Лектори - Конференция',
    plural: 'Лектори - Конференция',
  },
  admin: {
    hidden: true,
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заглавие',
      defaultValue: "Лектори",
      required: true,
    },
    {
      type: 'text',
      name: 'label',
      label: 'Вътрешен етикет',
      defaultValue: 'Лектори',
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
