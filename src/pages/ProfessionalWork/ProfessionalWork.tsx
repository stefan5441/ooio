import { Button } from "../../components/Button";
import { professionalWorkProjects } from "./utils";

export const ProfessionalWork = () => {
  const project = professionalWorkProjects[0];

  return (
    <div className="grid grid-cols-2 gap-6 h-full">
      {/* Left column */}
      <div className="col-span-1 overflow-y-auto space-y-6 text-lg">
        <h1 className="text-5xl font-bold">{project.project}</h1>

        {/* Role */}
        <div className="space-y-1">
          <p className="text-sm font-thin uppercase">My role on the project</p>
          <p>{project.role}</p>
        </div>

        {/* Technologies */}
        <div className="space-y-1">
          <p className="text-sm font-thin uppercase">Technologies used</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 leading-normal">
            {project.technologiesUsed.map((tech) => (
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
          <p>{project.projectDiscription}</p>
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
      <div className="col-span-1 flex items-center justify-center">
        <img src="xarviofm.png" alt={project.project} className="h-110 rounded-lg" />
      </div>
    </div>
  );
};
