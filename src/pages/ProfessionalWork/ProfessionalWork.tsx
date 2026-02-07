import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button";
import { professionalWorkProjects } from "./utils";
import { FaAngleLeft, FaAngleRight, FaLink } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

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

        <div className="space-y-1 flex gap-4">
          <span className="inline-flex items-center gap-1 text-zinc-800 bg-sky-200 rounded-xl py-1 px-2">
            <IoTime /> {project.duration}
          </span>
          <Button icon={FaLink} label="project/company" onClick={project.linkToProjectOnClick} />
        </div>

        {/* Role */}
        <div className="space-y-1">
          <p className="text-sm font-thin uppercase">My role on the project</p>
          <p>{project.role}</p>
        </div>

        {/* Technologies */}
        <div className="space-y-1">
          <p className="text-sm font-thin uppercase">Technologies used</p>
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
        </div>

        {/* Project description */}
        <div className="space-y-1">
          <p className="text-sm font-thin uppercase">Project description</p>
          <p>{project.projectDescription}</p>
        </div>

        {/* What I did */}
        <div className="space-y-1">
          <p className="text-sm font-thin uppercase">What I did</p>
          <p>{project.jobDescription}</p>
        </div>

        {/* Features */}
        <div className="space-y-1">
          <p className="text-sm font-thin uppercase">Features I implemented</p>
          <ul className="list-disc pl-5 space-y-1">
            {project.featuresImplemented.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
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
