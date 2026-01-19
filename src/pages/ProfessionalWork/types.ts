import type { IconType } from "react-icons";

export type WorkProjectConfig = {
  project: string;
  role: string;
  technologiesUsed: Array<{
    name: string;
    icon: IconType;
    url: string;
  }>;
  projectDiscription: string;
  jobDescription: string;
  featuresImplemented: string[];
};
