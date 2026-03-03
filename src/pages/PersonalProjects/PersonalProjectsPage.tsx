import { personalProjects } from "./constants";
import { ProjectsPage } from "../../components/ProjectsPage";

export const PersonalProjectsPage = () => (
  <ProjectsPage
    projects={personalProjects}
    basePath="/personal-projects"
    renderCardContent={(project) => (
      <div className="flex flex-col gap-3 px-4 py-4">
        <p className="text-lg font-bold">{project.name}</p>
        <p className="text-text-muted line-clamp-3 text-sm leading-relaxed">
          {project.projectDescription}
        </p>
      </div>
    )}
  />
);
