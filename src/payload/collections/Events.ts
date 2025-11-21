import { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
  slug: "events",
  typescript: {
    interface: "EventProps",
  },
  fields: [
    {
      name: "title",
      label: "Заглавие",
      type: "text",
      unique: true,
      index: true,
      required: true,
      admin: {
        placeholder: "От 0 до 15 милиона лева",
      },
    },
    {
      name: "description",
      label: "Описание",
      type: "richText",
      required: true,
    },
    {
      name: "shortDescription",
      label: "Кратко описание",
      type: "richText",
      admin: {
        description: "Най-много 1-2 параграфа НЕ повече",
      },
    },
    {
      name: "stripeUrl",
      label: "Stripe Checkout Url",
      type: "text",
      admin: {
        description:
          "Stripe Dashboard > Search (top center) > Payment Links > + New; Сложете redirect към сайта. Може с имейл, телефон или комбинация.",
      },
    },
    {
      name: "type",
      label: "Тип",
      type: "radio",
      options: [
        {
          label: "Networking",
          value: "networking",
        },
        {
          label: "Business breakfast",
          value: "businessBreakfast",
        },
        {
          label: "Конференция",
          value: "conference",
        },
        {
          label: "Обучения",
          value: "courses",
        },
      ],
      required: true,
      index: true,
    },
    {
      name: "date",
      label: "Дата",
      type: "date",
      required: true,
      index: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
          timeIntervals: 15,
          displayFormat: "dd MMM, yyyy HH:mm",
        },
      },
    },
    {
      name: "active",
      label: "Активно?",
      type: "radio",
      options: [
        {
          label: "No",
          value: "false",
        },
        {
          label: "Yes",
          value: "true",
        },
      ],
      defaultValue: "true",
      required: true,
      index: true,
    },
    {
      name: "speakerName",
      label: "Име на лектора",
      type: "text",
      required: true,
      index: true,
      admin: {
        description: "2 имена на лектора",
        placeholder: "Георги Петров",
      },
    },
    {
      name: "maxGuests",
      label: "Макс хора",
      type: "text",
      admin: {
        description: "поражда Недостиг у хората.",
        placeholder: "60 за Gravity Bar",
      },
      defaultValue: "60",
    },
    {
      name: "thumbnail",
      label: "Thumbnail",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Препоръчително 1920x1005px (Facebook event banner).",
      },
      required: true,
    },
    {
      name: "location",
      label: "Локация",
      type: "text",
      index: true,
      admin: {
        description:
          "Важно: Провери дали излиза в Google maps като пръв резултат.",
        placeholder: "Ресторант Dock 5",
      },
      defaultValue: "Gravity Ruin Bar, ет.2, Бургас",
    },
    {
      name: "locationUrl",
      label: "URL на локацията в Google maps",
      type: "text",
      index: true,
      admin: {
        description:
          'По подразбиране е Gravity Ruin Bar. Може да генерирате url от Google maps > потърси мястото > Бутон "Share".',
        placeholder: "https://maps.app.goo.gl/FSebWqtrExL7ZdfFA",
      },
      defaultValue: "https://maps.app.goo.gl/FSebWqtrExL7ZdfFA",
    },
    {
      name: "locationImg",
      label: "Снимка на локацията отвън",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Gravity bar по подразбиране",
      },
    },
  ],
  admin: {
    useAsTitle: "title",
  },
};
