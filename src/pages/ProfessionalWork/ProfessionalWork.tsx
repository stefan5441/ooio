import { IoTime } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaLink } from "react-icons/fa";

import { Button } from "../../components/Button";
import { professionalWorkProjects } from "./constants";
import { LabeledSection } from "../../components/LabeledSection";

export const ProfessionalWork = () => {
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const project = professionalWorkProjects[projectIndex];
  const hasPrev = projectIndex > 0;
  const hasNext = projectIndex < professionalWorkProjects.length - 1;

  // Scroll to top when project changes
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectIndex]);

  return (
    <div className="grid grid-cols-2 gap-6 h-full">
      {/* Left column */}
      <div ref={scrollRef} className="col-span-1 overflow-y-auto space-y-6 text-lg">
        <h1 className="text-5xl font-bold">{project.project}</h1>

        <div className="flex gap-4">
          <span className="inline-flex items-center gap-1 text-zinc-800 bg-sky-200 rounded-xl py-1 px-2">
            <IoTime /> {project.duration}
          </span>
          <Button icon={FaLink} label="project/company" onClick={project.linkToProjectOnClick} />
        </div>

        {/* Role */}
        <LabeledSection label="My role on the project">{project.role}</LabeledSection>

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

        {/* What I did */}
        <LabeledSection label="What I did">{project.jobDescription}</LabeledSection>

        {/* Features */}
        <LabeledSection label="Features I implemented">
          <ul className="list-disc pl-5 space-y-1">
            {project.featuresImplemented.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </LabeledSection>
      </div>

      {/* Right column */}
      <div className="col-span-1 relative flex items-center justify-center">
        <img src={project.projectImgSrc} alt={project.project} className="rounded-lg" />
        <div className="absolute bottom-0 right-4 flex gap-2">
          <Button icon={FaAngleLeft} iconSize={32} onClick={() => setProjectIndex((i) => i - 1)} disabled={!hasPrev} />
          <Button icon={FaAngleRight} iconSize={32} onClick={() => setProjectIndex((i) => i + 1)} disabled={!hasNext} />
        </div>
      </div>
    </div>
  );
};
