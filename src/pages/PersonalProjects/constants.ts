import { FaCss3Alt, FaGithub, FaNpm, FaReact } from "react-icons/fa";
import { SiTypescript, SiVite, SiNetlify } from "react-icons/si";

import { openLinkOnClick } from "../../utils";
import type { PersonalProjectConfig } from "./types";
import { IoLogoJavascript } from "react-icons/io5";

export const personalProjects: PersonalProjectConfig[] = [
  {
    id: "izvrshitel",
    name: "Izvrshitel",
    projectImgSrc: "/izvrshitel.png",
    linkToProjectOnClick: openLinkOnClick("https://izvrshitel.netlify.app/"),
    linkToRepoOnClick: openLinkOnClick(
      "https://github.com/stefan5441/izvrshitel",
    ),
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
        name: "CSS",
        icon: FaCss3Alt,
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Cheerio",
        icon: IoLogoJavascript,
        url: "https://cheerio.js.org/",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        url: "https://www.netlify.com/",
      },
      {
        name: "GitHub Actions",
        icon: FaGithub,
        url: "https://github.com/features/actions",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        url: "http://github.com/",
      },
    ],
    projectDescription:
      "A modern web application that provides an improved interface for browsing real estate auction listings from the Chamber of Enforcement Agents of Macedonia.",
    features: [
      "Better filtering - Advanced search and filter options",
      "Improved UI/UX - Clean, modern interface built with React",
      "Automated updates - Daily data scraping via GitHub Actions",
      "Enhanced usability - Pagination and responsive design",
    ],
  },
  {
    id: "react-activity-heatmap",
    name: "react-activity-heatmap",
    projectImgSrc: "/reactactivityheatmap.png",
    linkToProjectOnClick: openLinkOnClick(
      "https://react-activity-heatmap-demo.netlify.app/",
    ),
    linkToRepoOnClick: openLinkOnClick(
      "https://github.com/stefan5441/react-activity-heatmap",
    ),
    techUsed: [
      {
        name: "React",
        icon: FaReact,
        url: "https://react.dev",
      },
      {
        name: "npm",
        icon: FaNpm,
        url: "https://www.npmjs.com/",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        url: "https://www.typescriptlang.org",
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        url: "http://github.com/",
      },
    ],
    projectDescription:
      "NPM package for a react component for a simple & customizable LeetCode-style activity heatmap.",
    features: [
      "Calendar-style heatmap - Visualize activity data over time like Leetcode's contribution graph",
      "Customizable colors - Override default cell colors with custom level-based color scales",
      "Interactive cells - Click callbacks and tooltip support for rich user interactions",
      "Flexible formatting - Control month name format, locale, and cell styles with ease",
      "Accessibility built-in - Aria labels for both the heatmap container and individual cells",
    ],
  },
  {
    id: "almondbarista",
    name: "AlmondBarista",
    projectImgSrc: "/almondbarista.png",
    linkToProjectOnClick: openLinkOnClick("https://almondbarista.netlify.app/"),
    linkToRepoOnClick: openLinkOnClick(
      "https://github.com/stefan5441/almondbarista",
    ),
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
        name: "CSS",
        icon: FaCss3Alt,
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Dexie.js",
        icon: IoLogoJavascript,
        url: "https://dexie.org/",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        url: "https://www.netlify.com/",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        url: "http://github.com/",
      },
    ],
    projectDescription:
      "A simple, minimalist, privacy-focused diary app. Your data stays private, saved locally in your browser.",
    features: [
      "Daily input - Enter and save your thoughts in a text box",
      "History overview - Browse and navigate through previous entries",
      "Local storage - All data is stored locally in your browser using IndexedDB",
      "Data transfer - Easily transfer data between browsers with the 'download data' and 'upload data' buttons",
    ],
  },
];
