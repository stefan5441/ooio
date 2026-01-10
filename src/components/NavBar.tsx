import { useState } from "react";
import { Button } from "./Button";
import type { Tab } from "../types";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { FaDog, FaFish, FaFrog, FaGithub, FaLinkedin } from "react-icons/fa";

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

  return (
    <div className="flex justify-center items-center gap-12">
      <div className="flex gap-6">
        <Button label="home" icon={FaFrog} onClick={() => setTab("Home")} isActive={activeTab === "Home"} />
        <Button label="projects" icon={FaDog} onClick={() => setTab("Projects")} isActive={activeTab === "Projects"} />
        <Button label="recently" icon={FaFish} onClick={() => setTab("Recently")} isActive={activeTab === "Recently"} />
      </div>

      <div className="font-extrabold">/</div>

      <div className="flex gap-6">
        <Button label="github" icon={FaGithub} onClick={() => window.open("https://github.com/stefan5441", "_blank")} />
        <Button
          label="linkedin"
          icon={FaLinkedin}
          onClick={() => window.open("https://www.linkedin.com/in/stefanchambov/", "_blank")}
        />
        <Button
          label="leetcode"
          icon={SiLeetcode}
          onClick={() => window.open("https://leetcode.com/u/5441anr/", "_blank")}
        />
        <Button label="copy mail" icon={copied ? MdMarkEmailRead : MdEmail} onClick={handleCopy} disabled={copied} />
      </div>
    </div>
  );
};
