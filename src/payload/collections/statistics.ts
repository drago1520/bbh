import { CollectionConfig } from "payload";
import { StatisticBlock } from "./TODO-turnBlockIntoCollection-statistic-block";

export const StatisticsCollection: CollectionConfig = {
  slug: "statisticsN",
  typescript: {
    interface: "StatisticsProps",
  },
  labels: {
    singular: "Статистика",
    plural: "Статистики",
  },
  admin: {
    hidden: true,
    useAsTitle: "label",
  },
  fields: [
    {
      type: "text",
      name: "label",
      label: "Вътрешен етикет",
      defaultValue: "Статистики",
      required: true,
    },
    {
      name: "title",
      type: "text",
      label: "Заглавие на секцията",
      admin: {
        description: "Показва се над трите статистики",
        placeholder: "Нашите резултати говорят",
      },
    },
    {
      name: "statisticsData",
      type: "blocks",
      label: "Три статистики",
      blocks: [StatisticBlock],
      minRows: 3,
      maxRows: 3,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
};
