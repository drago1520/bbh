import { authenticated } from "@/utils/payload-auth";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
    create: authenticated,
    delete: authenticated,
    update: authenticated,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: {
    focalPoint: true,
    disableLocalStorage: true,
  },
};
