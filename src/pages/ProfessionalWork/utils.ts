import { VscAzure } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { FaGithub, FaMicrosoft, FaReact } from "react-icons/fa";
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
import { openLinkOnClick } from "../../utils";

export const professionalWorkProjects: WorkProjectConfig[] = [
  {
    project: "xarvio Field Manager",
    role: "Frontend React Developer",
    duration: "1 year 5 months (ongoing)",
    projectImgSrc: "xarviofm.png",
    linkToProjectOnClick: openLinkOnClick("https://fm.xarvio.com/de/en_de/login"),
    techUsed: [
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
        name: "GitHub",
        icon: FaGithub,
        url: "http://github.com/",
      },
    ],
    projectDescription:
      "xarvio Field Manager is a digital farming platform designed to help farmers and agronomists optimize crop production from planting (seeding) through to harvest by providing field-zone-specific data, insights, and recommendations. It uses satellite imagery, weather data, crop models, and historical field information to support precise decision-making and efficiency improvements in crop management.",
    jobDescription:
      "Worked on a new feature called Carbon Farming that helps make agriculture more sustainable. This feature allows farmers to track and optimize their carbon emissions and calculate Carbon Points based on emission reductions. These points help farmers reduce costs while improving the sustainability of their crop production.",
    featuresImplemented: [
      "A data table displaying all crops from the current and previous seasons, including tasks such as land preparation, spraying, and harvesting, along with their relevant data.",
      "Create/edit modals for each of these entities. In total, six modals were implemented, some with nested sub-modals, each containing 4–5 required fields and supported by re-fetching logic to ensure the data remained up to date.",
      "An Excel-like selection experience in the data table, including copy-and-paste functionality for created tasks. Selecting tasks opened a side panel displaying detailed information for the selected task.",
    ],
  },
  {
    project: "Sodexo – Dynamics 365 Field Service CRM",
    role: "Microsoft Dynamics 365 CRM & Azure Developer",
    duration: "1 year",
    projectImgSrc: "sodexo.webp",
    linkToProjectOnClick: openLinkOnClick("https://www.sodexo.com/"),
    techUsed: [
      {
        name: "Microsoft Dynamics 365",
        icon: FaMicrosoft,
        url: "https://dynamics.microsoft.com",
      },
      {
        name: "Power Apps",
        icon: FaMicrosoft,
        url: "https://powerapps.microsoft.com",
      },
      {
        name: "Dynamics 365 Plugins",
        icon: TbBrandCSharp,
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/tutorial-write-plug-in",
      },
      {
        name: "Power Automate",
        icon: FaMicrosoft,
        url: "https://powerautomate.microsoft.com",
      },
      {
        name: "Azure Service Bus",
        icon: VscAzure,
        url: "https://azure.microsoft.com/en-us/products/service-bus",
      },
      {
        name: "Azure Logic Apps",
        icon: VscAzure,
        url: "https://azure.microsoft.com/en-us/products/logic-apps",
      },
    ],
    projectDescription:
      "A large Microsoft Dynamics 365 model-driven application built on top of the Field Service module, complemented by a Canvas app for mobile workers, and a Microsoft Dynamics 365 to Salesforce integration using Azure services.",
    jobDescription:
      "Worked on day-to-day feature development and bug fixes for a Microsoft Dynamics 365 model-driven application, primarily using Power Automate flows and Dynamics 365 plugins. Took ownership of the Microsoft Dynamics 365 to Salesforce integration, ensuring reliable and maintainable data synchronization.",
    featuresImplemented: [
      "Designed and owned the Microsoft Dynamics 365 → Azure Service Bus → Azure Logic Apps → Salesforce integration.",
      "Maintained and improved reliability of data synchronization between Dynamics 365 and Salesforce.",
      "Implemented and maintained Power Automate flows supporting business processes in the model-driven app.",
      "Developed and debugged Dynamics 365 plugins to handle custom business logic.",
    ],
  },
  {
    project: "VAT Group – ERP Process Automation",
    role: "Microsoft Azure Developer",
    duration: "2 months",
    projectImgSrc: "vat.jpg",
    linkToProjectOnClick: openLinkOnClick("https://www.vatgroup.com/en"),
    techUsed: [
      {
        name: "Azure Logic Apps",
        icon: VscAzure,
        url: "https://azure.microsoft.com/en-us/products/logic-apps",
      },
      {
        name: "Azure Service Bus",
        icon: VscAzure,
        url: "https://azure.microsoft.com/en-us/products/service-bus",
      },
      {
        name: "Microsoft Dynamics 365",
        icon: FaMicrosoft,
        url: "https://dynamics.microsoft.com",
      },
    ],
    projectDescription:
      "Large-scale Microsoft Dynamics 365 ERP project supported by numerous Azure Logic Apps used to automate and orchestrate business processes.",
    jobDescription:
      "Worked on the project for approximately two months. Primarily responsible for implementing, debugging, and deploying Azure Logic Apps. At the time, there was no standardized deployment process for Logic Apps, so I created a deployment manual that was later adopted by all VAT team members within the company (AXM365).",
    featuresImplemented: [
      "Implemented, debugged, and maintained Azure Logic Apps.",
      "Standardized the Azure Logic App deployment process across the project.",
    ],
  },
  {
    project: "Octopus Investments – Dynamics 365 CRM",
    role: "Microsoft Dynamics CRM and Power Apps Developer",
    duration: "3 months",
    projectImgSrc: "octopus.webp",
    linkToProjectOnClick: openLinkOnClick("https://octopusinvestments.com/"),
    techUsed: [
      {
        name: "Microsoft Dynamics 365",
        icon: FaMicrosoft,
        url: "https://dynamics.microsoft.com",
      },
      {
        name: "Power Apps",
        icon: FaMicrosoft,
        url: "https://powerapps.microsoft.com",
      },
      {
        name: "Dynamics 365 Plugins",
        icon: TbBrandCSharp,
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/tutorial-write-plug-in",
      },
      {
        name: "Power Automate",
        icon: FaMicrosoft,
        url: "https://powerautomate.microsoft.com",
      },
    ],
    projectDescription:
      "Microsoft Dynamics 365 CRM solution consisting of both model-driven and canvas applications, developed for a UK-based investment company",
    jobDescription:
      "First professional experience as a Microsoft Dynamics 365 CRM/CE developer. Contributed to the implementation of C# plugins, JavaScript web resources, and Power Automate flows. Worked within an agile development process and collaborated closely with the QA team to ensure correct and high-quality feature delivery.",
    featuresImplemented: [
      "Designed and implemented a centralized logging strategy for over 100 Power Automate flows.",
      "Developed and maintained features and bug fixes across model-driven and canvas apps using C# plugins, JavaScript web resources, and Power Automate flows.",
    ],
  },
];
