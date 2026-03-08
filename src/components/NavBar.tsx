import { useState } from "react";
import type { IconType } from "react-icons";
import { SiLeetcode } from "react-icons/si";
import { FaCat, FaDog, FaFrog, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MdEmail,
  MdMarkEmailRead,
  MdMenu,
  MdClose,
  MdLightMode,
  MdDarkMode,
} from "react-icons/md";

import { Button } from "./Button";
import { openLinkOnClick } from "../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

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
  const { theme, toggle } = useTheme();
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("stefanchambov@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const navTabsConfig: NavBarTab[] = [
    {
      label: "home",
      icon: FaFrog,
      onClick: () => {
        navigate("/");
        setMenuOpen(false);
      },
      isActive: pathname === "/",
    },
    {
      label: "professional work",
      icon: FaDog,
      onClick: () => {
        navigate("/professional-work");
        setMenuOpen(false);
      },
      isActive: pathname.startsWith("/professional-work"),
    },
    {
      label: "personal projects",
      icon: FaCat,
      onClick: () => {
        navigate("/personal-projects");
        setMenuOpen(false);
      },
      isActive: pathname.startsWith("/personal-projects"),
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
    {
      label: "",
      icon: theme === "dark" ? MdLightMode : MdDarkMode,
      onClick: toggle,
    },
  ];

  return (
    <>
      {/* Desktop nav — unchanged */}
      <div className="hidden h-24 shrink-0 items-center justify-center gap-12 xl:flex">
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

        <div className="text-primary font-extrabold">/</div>

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
      </div>

      {/* Mobile nav */}
      <div className="xl:hidden">
        <div className="relative z-50 flex h-14 items-center justify-end">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="bg-bg/80 fixed inset-0 z-40 flex items-center justify-center backdrop-blur-md">
            <div className="flex flex-col items-center gap-6">
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

              <div className="text-primary font-extrabold">/</div>

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
          </div>
        )}
      </div>
    </>
  );
};
