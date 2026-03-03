import { FaLink } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdBadge } from "react-icons/md";

import { Button } from "../../components/Button";
import { professionalWorkProjects } from "./constants";
import { LabeledSection } from "../../components/LabeledSection";
import { ProjectDetail } from "../../components/ProjectDetail";

export const ProfessionalWorkProject = () => (
  <ProjectDetail
    projects={professionalWorkProjects}
    fallbackPath="/professional-work"
    renderLeftColumn={(project) => (
      <>
        <div className="flex flex-col gap-4">
          <div className="border-surface rounded-md border-2 p-4">
            <LabeledSection label="Project info">
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-1">
                  <MdBadge /> My role: {project.role}
                </div>
                <div className="inline-flex items-center gap-1">
                  <IoTime /> Project duration: {project.duration}
                </div>
              </div>
            </LabeledSection>
          </div>

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
        </div>

        <LabeledSection label="Project description">
          {project.projectDescription}
        </LabeledSection>

        <LabeledSection label="What I did">
          {project.jobDescription}
        </LabeledSection>

        <LabeledSection label="Features I implemented">
          <ul className="list-disc space-y-1 pl-5">
            {project.featuresImplemented.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </LabeledSection>
      </>
    )}
    renderActions={(project) => (
      <Button
        icon={FaLink}
        label="link to project/company"
        onClick={project.linkToProjectOnClick}
      />
    )}
  />
);
