import { useState } from "react";
import type { IconType } from "react-icons";
import { SiLeetcode } from "react-icons/si";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { FaCat, FaDog, FaFrog, FaGithub, FaLinkedin } from "react-icons/fa";

import { Button } from "./Button";
import { openLinkOnClick } from "../utils";
import { useLocation, useNavigate } from "react-router-dom";

type NavBarTab = {
  icon: IconType;
  label: string;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
};

export const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
      onClick: () => navigate("/"),
      isActive: pathname === "/",
    },
    {
      label: "professional work",
      icon: FaDog,
      onClick: () => navigate("/professional-work"),
      isActive: pathname.startsWith("/professional-work"),
    },
    {
      label: "personal projects",
      icon: FaCat,
      onClick: () => navigate("/personal-projects"),
      isActive: pathname.startsWith("/personal-projects"),
    },
    // TODO
    // {
    //   label: "activity",
    //   icon: FaFish,
    //   onClick: () => setTab(Tab.Activity),
    //   isActive: activeTab === Tab.Activity,
    // },
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

      <div className="font-extrabold text-primary">/</div>

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
