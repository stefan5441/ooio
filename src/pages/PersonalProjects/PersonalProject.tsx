import { useEffect } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

import { personalProjects } from "./constants";
import { Button } from "../../components/Button";
import { LabeledSection } from "../../components/LabeledSection";

export const PersonalProject = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = personalProjects.find((p) => p.id === projectId);

  useEffect(() => {
    if (!project) {
      navigate("/personal-projects");
    }
  }, [navigate, project]);

  if (!project) {
    return null;
  }

  return (
    <div className="grid h-full grid-cols-2 gap-6">
      <div className="col-span-1 space-y-6 overflow-y-auto text-lg">
        <h1 className="text-5xl font-bold">{project.name}</h1>

        {/* Technologies */}
        <div className="border-surface col-span-2 rounded-md border-2 p-4">
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
        </div>

        {/* Project description */}
        <LabeledSection label="Project description">
          {project.projectDescription}
        </LabeledSection>

        {/* Features */}
        <LabeledSection label="Project features">
          <ul className="list-disc space-y-1 pl-5">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </LabeledSection>
      </div>

      {/* Right column */}
      <div className="col-span-1 flex flex-col items-center justify-center gap-3">
        <img
          src={project.projectImgSrc}
          alt={project.name}
          className="rounded-lg"
        />
        <div className="flex gap-4">
          <Button
            icon={FaLink}
            label="link to project"
            onClick={project.linkToProjectOnClick}
          />
          <Button
            icon={FaGithub}
            label="github repository"
            onClick={project.linkToRepoOnClick}
          />
        </div>
      </div>
    </div>
  );
};
