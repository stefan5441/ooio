import { useNavigate } from "react-router-dom";
import { personalProjects } from "./constants";

export const PersonalProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="grid w-full grid-cols-3 items-start gap-6 px-1 py-2">
      {personalProjects.map((project) => (
        <div
          key={project.name}
          onClick={() => navigate(`/personal-projects/${project.id}`)}
          className="bg-surface hover:ring-primary-hover flex h-80 cursor-pointer flex-col rounded-xl transition-all duration-200 hover:-translate-y-1 hover:ring-2"
        >
          <div className="h-48 overflow-hidden rounded-t-xl">
            <img
              src={project.projectImgSrc}
              alt={project.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-3 px-4 py-4">
            <p className="text-lg font-bold">{project.name}</p>
            <p className="text-text-muted line-clamp-3 text-sm leading-relaxed">
              {project.projectDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
