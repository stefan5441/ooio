import { useState } from "react";
import type { IconType } from "react-icons";
import { SiLeetcode } from "react-icons/si";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { FaCat, FaDog, FaFish, FaFrog, FaGithub, FaLinkedin } from "react-icons/fa";

import { Tab } from "../types";
import { Button } from "./Button";
import { openLinkOnClick } from "../utils";

type NavBarTab = {
  icon: IconType;
  label: string;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
};

type Props = {
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
  activeTab: Tab;
};

export const NavBar = ({ setTab, activeTab }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("stefanchambov@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const navTabsConfig: NavBarTab[] = [
    {
      label: "home",
      icon: FaFrog,
      onClick: () => setTab(Tab.Home),
      isActive: activeTab === Tab.Home,
    },
    {
      label: "professional work",
      icon: FaDog,
      onClick: () => setTab(Tab.ProfessionalWork),
      isActive: activeTab === Tab.ProfessionalWork,
    },
    {
      label: "personal projects",
      icon: FaCat,
      onClick: () => setTab(Tab.PersonalProjects),
      isActive: activeTab === Tab.PersonalProjects,
    },
    {
      label: "activity",
      icon: FaFish,
      onClick: () => setTab(Tab.Activity),
      isActive: activeTab === Tab.Activity,
    },
  ];

  const infoTabsConfig: NavBarTab[] = [
    {
      label: "github",
      icon: FaGithub,
      onClick: openLinkOnClick("https://github.com/stefan5441"),
    },
    {
      label: "linkedin",
      icon: FaLinkedin,
      onClick: openLinkOnClick("https://www.linkedin.com/in/stefanchambov/"),
    },
    {
      label: "leetcode",
      icon: SiLeetcode,
      onClick: openLinkOnClick("https://leetcode.com/u/5441anr/"),
    },
    {
      label: "copy mail",
      icon: copied ? MdMarkEmailRead : MdEmail,
      onClick: handleCopy,
      isDisabled: copied,
    },
  ];

  return (
    <>
      <div className="flex gap-6">
        {navTabsConfig.map((tab) => (
          <Button
            key={tab.label}
            label={tab.label}
            icon={tab.icon}
            onClick={tab.onClick}
            isActive={tab.isActive ?? false}
            disabled={tab.isDisabled ?? false}
          />
        ))}
      </div>

      <div className="font-extrabold">/</div>

      <div className="flex gap-6">
        {infoTabsConfig.map((tab) => (
          <Button
            key={tab.label}
            label={tab.label}
            icon={tab.icon}
            onClick={tab.onClick}
            isActive={tab.isActive ?? false}
            disabled={tab.isDisabled ?? false}
          />
        ))}
      </div>
    </>
  );
};
