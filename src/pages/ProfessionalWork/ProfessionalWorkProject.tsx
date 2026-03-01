import { FaLink } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdBadge } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../../components/Button";
import { professionalWorkProjects } from "./constants";
import { LabeledSection } from "../../components/LabeledSection";

export const ProfessionalWorkProject = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = professionalWorkProjects.find((p) => p.id === projectId);

  if (!project) {
    navigate("/professional-work");
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-6 h-full">
      <div className="col-span-1 overflow-y-auto space-y-6 text-lg">
        <h1 className="text-5xl font-bold">{project.project}</h1>

        <div className="flex flex-col gap-4">
          <div className="p-4 border-2 border-surface rounded-md">
            <LabeledSection label="Project info">
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-1">
                  <MdBadge /> My role: {project.role}
                </div>
                <div className="inline-flex items-center gap-1">
                  <IoTime /> Project duration: {project.duration}
                </div>
                <Button icon={FaLink} label="Link to project/company" onClick={project.linkToProjectOnClick} />
              </div>
            </LabeledSection>
          </div>

          <div className="col-span-2 p-4 border-2 border-surface rounded-md">
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
      </div>
    </div>
  );
};
