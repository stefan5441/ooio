import { FaGithub, FaLink } from "react-icons/fa";

import { personalProjects } from "./constants";
import { Button } from "../../components/Button";
import { ProjectDetail } from "../../components/ProjectDetail";
import { LabeledSection } from "../../components/LabeledSection";

export const PersonalProject = () => (
  <ProjectDetail
    projects={personalProjects}
    fallbackPath="/personal-projects"
    renderLeftColumn={(project) => (
      <>
        <div className="border-surface rounded-md border-2 p-4">
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

        <LabeledSection label="Project description">
          {project.projectDescription}
        </LabeledSection>

        <LabeledSection label="Project features">
          <ul className="list-disc space-y-1 pl-5">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </LabeledSection>
      </>
    )}
    renderActions={(project) => (
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
    )}
  />
);
