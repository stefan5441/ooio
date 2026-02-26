import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaGithub, FaLink } from "react-icons/fa";

import { personalProjects } from "./constants";
import { Button } from "../../components/Button";
import { LabeledSection } from "../../components/LabeledSection";

export const PersonalProjects = () => {
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const project = personalProjects[projectIndex];
  const hasPrev = projectIndex > 0;
  const hasNext = projectIndex < personalProjects.length - 1;

  // Scroll to top when project changes
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectIndex]);

  return (
    <div className="grid grid-cols-2 gap-6 h-full">
      {/* Left column */}
      <div ref={scrollRef} className="col-span-1 overflow-y-auto space-y-6 text-lg">
        <h1 className="text-5xl font-bold">{project.name}</h1>

        <div className="flex gap-4">
          <Button icon={FaLink} label="link to project" onClick={project.linkToProjectOnClick} />
          <Button icon={FaGithub} label="github repository" onClick={project.linkToRepoOnClick} />
        </div>

        {/* Technologies */}
        <LabeledSection label="Technologies used">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 leading-normal">
            {project.techUsed.map((tech) => (
              <Button
                key={tech.name}
                label={tech.name}
                icon={tech.icon}
                onClick={() => window.open(tech.url, "_blank")}
              />
            ))}
          </div>
        </LabeledSection>

        {/* Project description */}
        <LabeledSection label="Project description">{project.projectDescription}</LabeledSection>

        {/* Features */}
        <LabeledSection label="Project features">
          <ul className="list-disc pl-5 space-y-1">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </LabeledSection>
      </div>

      {/* Right column */}
      <div className="col-span-1 relative flex items-center justify-center">
        <img src={project.projectImgSrc} alt={project.name} className="rounded-lg" />

        <div className="absolute bottom-0 right-4 flex gap-2">
          <Button icon={FaAngleLeft} iconSize={32} onClick={() => setProjectIndex((i) => i - 1)} disabled={!hasPrev} />
          <Button icon={FaAngleRight} iconSize={32} onClick={() => setProjectIndex((i) => i + 1)} disabled={!hasNext} />
        </div>
      </div>
    </div>
  );
};
