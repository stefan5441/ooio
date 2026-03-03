import { IoTime } from "react-icons/io5";
import { MdBadge } from "react-icons/md";
import { professionalWorkProjects } from "./constants";
import { ProjectsPage } from "../../components/ProjectsPage";

export const ProfessionalWorkPage = () => (
  <ProjectsPage
    projects={professionalWorkProjects}
    basePath="/professional-work"
    cardHeight="h-100"
    renderCardContent={(project) => (
      <div className="flex flex-col gap-3 px-4 py-4">
        <p className="text-lg font-bold">{project.name}</p>
        <p className="text-text-muted line-clamp-3 text-sm leading-relaxed">
          {project.projectDescription}
        </p>
        <div className="text-text-muted flex flex-col gap-1 text-sm">
          <p className="flex items-center gap-2">
            <MdBadge className="shrink-0" /> {project.role}
          </p>
          <p className="flex items-center gap-2">
            <IoTime className="shrink-0" /> {project.duration}
          </p>
        </div>
      </div>
    )}
  />
);
