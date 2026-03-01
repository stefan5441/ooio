import { IoTime } from "react-icons/io5";
import { MdBadge } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { professionalWorkProjects } from "./constants";

export const ProfessionalWork = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-6 items-start pt-2">
      {professionalWorkProjects.map((project) => (
        <div
          key={project.project}
          onClick={() => navigate(`/professional-work/${project.id}`)}
          className="h-100 flex flex-col bg-surface rounded-xl 
          transition-all duration-200 hover:-translate-y-1 cursor-pointer"
        >
          <div className="h-48 overflow-hidden rounded-t-xl">
            <img
              src={project.projectImgSrc}
              alt={project.project}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="px-4 py-4 flex flex-col gap-3">
            <p className="text-lg font-bold">{project.project}</p>
            <p className="line-clamp-3 text-sm text-text-muted leading-relaxed">{project.projectDescription}</p>
            <div className="flex flex-col gap-1 text-sm text-text-muted">
              <p className="flex items-center gap-2">
                <MdBadge className="shrink-0" /> {project.role}
              </p>
              <p className="flex items-center gap-2">
                <IoTime className="shrink-0" /> {project.duration}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
