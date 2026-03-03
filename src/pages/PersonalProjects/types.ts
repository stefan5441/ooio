import type { IconType } from "react-icons";

export type PersonalProjectConfig = {
  id: string;
  name: string;
  techUsed: Array<{
    name: string;
    icon: IconType;
    url: string;
  }>;
  projectDescription: string;
  features: string[];
  projectImgSrc: string;
  linkToProjectOnClick: () => void;
  linkToRepoOnClick: () => void;
};
