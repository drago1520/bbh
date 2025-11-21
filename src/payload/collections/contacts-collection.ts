import { socialOptions } from "@/utils/social-icons-render";
import { CollectionConfig } from "payload";

export const Contacts: CollectionConfig = {
  typescript: {
    interface: "ContactsProps",
  },
  slug: "contacts",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Заглавие",
      admin: {
        description: "Показва се над Формуляра за контакти",
        placeholder: "Имате нужда от помощ?",
      },
    },
    {
      name: "subheading",
      type: "text",
      label: "Подзаглавие",
      admin: {
        placeholder:
          "Ще се радваме, ако ни посетите или просто се обадете на 088 майката на Росен.",
      },
    },
    {
      name: "gmaps",
      type: "text",
      label: "Google maps iframe embed url",
      admin: {
        description:
          'google.com/maps > намери място > "Share" > Embed a map > копирайте само url-a в кавичките. 15 сек  tutorial: https://vento.so/view/9e099913-bb15-4990-af47-5b62dc41b98e?utm_medium=share',
      },
      defaultValue:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948552!3d37.75781499651705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1619806204562!5m2!1sen!2sus",
    },
    {
      type: "row",
      fields: [
        {
          type: "text",
          name: "cta",
          required: true,
        },
        {
          type: "textarea",
          name: "address",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "phones",
          type: "array",
          fields: [
            {
              name: "phone",
              type: "text",
            },
          ],
        },
        {
          type: "array",
          name: "emails",
          fields: [
            {
              type: "text",
              name: "email",
            },
          ],
        },
        {
          type: "array",
          name: "socials",
          label: "Социални мрежи",
          fields: [
            {
              type: "select",
              name: "platform",
              label: "Платформа",
              required: true,
              options: socialOptions,
            },
            {
              type: "text",
              name: "url",
              label: "Линк",
              required: true,
              admin: {
                placeholder: "https://facebook.com/your-page",
              },
            },
          ],
          admin: {
            description: "Социалки. Важно е да има youtube за SEO.",
          },
        },
      ],
    },
  ],
};
