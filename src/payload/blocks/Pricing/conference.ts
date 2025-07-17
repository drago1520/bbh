import { Block } from 'payload';

export const PricingWithCountdownBlock: Block = {
  slug: 'PricingWithCountdown',
  labels: {
    singular: 'Цени конференция',
    plural: 'Цени конференция',
  },
  interfaceName: 'PricingProps',
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Label (най-отгоре)',
      admin: {
        placeholder: 'Специална оферта',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Заглавие',
      required: true,
      admin: {
        placeholder: 'Изберете най-добрия план за вас',
      },
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Подзаглавие',
      admin: {
        placeholder: 'Гъвкави опции за всеки бюджет',
      },
    },
    {
      name: 'saleEnd',
      type: 'date',
      label: 'Край на разпродажбата',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'dd MMM, yyyy HH:mm',
        },
      },
    },
    {
      name: 'plans',
      type: 'array',
      label: 'Видове билети',
      required: true,
      labels: {
        singular: 'вид билет',
        plural: 'видове билети',
      },
      admin: {
        initCollapsed: true,
      },
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Заглавие на плана',
          admin: {
            placeholder: 'Основен план',
          },
        },
        {
          name: 'features',
          type: 'array',
          label: 'Feature-и към билета',
          labels: {
            singular: 'feature към билета',
            plural: 'features към билета',
          },
          fields: [
            {
              name: 'feature',
              type: 'text',
              label: false,
              required: true,
              admin: {
                placeholder: 'Неограничено съхранение',
              },
            },
          ],
        },
        {
          name: 'originalPrice',
          type: 'text',
          label: 'Първоначална цена',
          required: true,
          admin: {
            placeholder: '99 лв.',
          },
        },
        {
          name: 'discountedPrice',
          type: 'text',
          label: 'Намалена цена',
          admin: {
            placeholder: '79 лв.',
          },
        },
        {
          name: 'discount',
          type: 'text',
          label: 'Отстъпка',
          admin: {
            placeholder: '20%',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Описание',
          admin: {
            placeholder: 'Перфектен за малки екипи...',
          },
        },
        {
          name: 'active',
          type: 'checkbox',
          label: 'Активен',
          required: true,
          defaultValue: false,
        },
        {
          name: 'bonus',
          type: 'text',
          label: 'Бонус',
          admin: {
            placeholder: 'Безплатен месец при годишен абонамент',
          },
        },
      ],
    },
  ],
};
