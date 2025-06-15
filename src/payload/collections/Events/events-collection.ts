import { authenticated } from '@/payload/auth/authenticated';
import { ContentWithMedia } from '@/payload/blocks/content-with-media/content-with-media';
import { FaqLeftRightBlock } from '@/payload/blocks/FAQs/blocks/block-faq-left-right';
import { CollectionConfig } from 'payload';

export const Events: CollectionConfig = {
  slug: 'events',
  fields: [
    {
      name: 'title',
      label: 'Заглавие',
      type: 'text',
      unique: true,
      index: true,
      required: true,
      admin: {
        placeholder: 'От 0 до 15 милиона лева',
      },
    },
    {
      name: 'description',
      label: 'Описание',
      type: 'richText',
      required: true,
    },
    {
      name: 'type',
      label: 'Тип',
      type: 'radio',
      options: [
        {
          label: 'Networking',
          value: 'networking',
        },
        {
          label: 'Business breakfast',
          value: 'businessBreakfast',
        },
      ],
      required: true,
      index: true,
    },
    {
      name: 'date',
      label: 'Дата',
      type: 'date',
      required: true,
      index: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          timeIntervals: 15,
          displayFormat: 'dd MMM, yyyy HH:mm',
        },
      },
    },
    {
      name: 'active',
      label: 'Активно?',
      type: 'radio',
      options: [
        {
          label: 'No',
          value: 'false',
        },
        {
          label: 'Yes',
          value: 'true',
        },
      ],
      defaultValue: 'true',
      required: true,
      index: true,
    },
    {
      name: 'location',
      label: 'Локация',
      type: 'text',
      index: true,
      required: true,
      admin: {
        description: 'Важно: Провери дали излиза в Google maps като пръв резултат.',
        placeholder: 'Ресторант Dock 5',
      },
      defaultValue: 'Gravity Ruin Bar, ет.2, Бургас',
    },
    {
      name: 'speakerName',
      label: 'Име на лектора',
      type: 'text',
      required: true,
      index: true,
      admin: {
        description: '2 имена на лектора',
        placeholder: 'Георги Петров',
      },
    },
    {
      name: 'maxGuests',
      label: 'Макс хора',
      type: 'text',
      admin: {
        description: 'поражда Недостиг у хората.',
        placeholder: '60 за Gravity Bar',
      },
      defaultValue: '60',
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Препоръчително 1:1 съотношение. Например: 300x300px най-добре. Thumbnail или снимка на лектор. За сега е кръгла.',
      },
      required: true,
    },
    {
      name: 'speakerCompanyLogo',
      label: 'Лого на компанията на лектора',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Препоръчително 1:1 съотношение. Например: 64x64px.',
      },
      // required: true
    },
    {
      type: 'blocks',
      name: 'Block content with media',
      blocks: [FaqLeftRightBlock],
    },
  ],
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
};
