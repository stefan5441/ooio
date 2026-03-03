import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Props<T extends { id: string; name: string; projectImgSrc: string }> = {
  projects: T[];
  fallbackPath: string;
  renderLeftColumn: (project: T) => React.ReactNode;
  renderActions: (project: T) => React.ReactNode;
};

export const ProjectDetail = <
  T extends { id: string; name: string; projectImgSrc: string },
>({
  projects,
  fallbackPath,
  renderLeftColumn,
  renderActions,
}: Props<T>) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    if (!project) {
      navigate(fallbackPath);
    }
  }, [fallbackPath, navigate, project]);

  if (!project) {
    return null;
  }

  return (
    <div className="grid h-full grid-cols-2 gap-6">
      <div className="col-span-1 space-y-6 overflow-y-auto text-lg">
        <h1 className="text-5xl font-bold">{project.name}</h1>
        {renderLeftColumn(project)}
      </div>

      {/* Right column */}
      <div className="col-span-1 flex flex-col items-center justify-center gap-3">
        <img
          src={project.projectImgSrc}
          alt={project.name}
          className="rounded-lg"
        />
        {renderActions(project)}
      </div>
    </div>
  );
};
