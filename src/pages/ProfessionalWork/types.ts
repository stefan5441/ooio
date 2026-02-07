import type { IconType } from "react-icons";

export type WorkProjectConfig = {
  project: string;
  role: string;
  duration: string;
  techUsed: Array<{
    name: string;
    icon: IconType;
    url: string;
  }>;
  projectDescription: string;
  jobDescription: string;
  featuresImplemented: string[];
  projectImgSrc: string;
  linkToProjectOnClick: () => void;
};
