import { FaGithub, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiVite,
  SiGraphql,
  SiElasticsearch,
  SiApollographql,
  SiRedux,
  SiReactrouter,
  SiVitest,
} from "react-icons/si";

import type { WorkProjectConfig } from "./types";

export const professionalWorkProjects: WorkProjectConfig[] = [
  {
    project: "xarvio Field Manager",
    role: "Frontend React Developer",
    technologiesUsed: [
      {
        name: "React",
        icon: FaReact,
        url: "https://react.dev",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        url: "https://www.typescriptlang.org",
      },
      {
        name: "Vite",
        icon: SiVite,
        url: "https://vitejs.dev",
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        url: "https://graphql.org",
      },
      {
        name: "Elasticsearch",
        icon: SiElasticsearch,
        url: "https://www.elastic.co/elasticsearch",
      },
      {
        name: "Apollo GraphQL",
        icon: SiApollographql,
        url: "https://www.apollographql.com",
      },
      {
        name: "Redux",
        icon: SiRedux,
        url: "https://redux.js.org",
      },
      {
        name: "React Router",
        icon: SiReactrouter,
        url: "https://reactrouter.com",
      },
      {
        name: "Vitest",
        icon: SiVitest,
        url: "https://vitest.dev",
      },
      {
        name: "Github",
        icon: FaGithub,
        url: "http://github.com/",
      },
    ],
    projectDiscription:
      "xarvio Field Manager is a digital farming platform designed to help farmers and agronomists optimize crop production from planting (seeding) through to harvest by providing field- and field-zone-specific data, insights, and recommendations. It uses satellite imagery, weather data, crop models, and historical field information to support precise decision-making and efficiency improvements in crop management.",
    jobDescription:
      "Worked on a new feature called Carbon Farming that helps make agriculture more sustainable. This feature allows farmers to track and optimize their carbon emissions and calculate Carbon Points based on emission reductions. These points help farmers reduce costs while improving the sustainability of their crop production.",
    featuresImplemented: [
      "A data table displaying all crops from the current and previous seasons, including tasks such as land preparation, spraying, and harvesting, along with their relevant data.",
      "Create/edit modals for each of these entities. In total, six modals were implemented, some with nested sub-modals, each containing 4–5 required fields and supported by re-fetching logic to ensure the data remained up to date.",
      "An Excel-like selection experience in the data table, including copy-and-paste functionality for created tasks. Selecting tasks opened a side panel displaying detailed information for the selected task.",
    ],
  },
];
