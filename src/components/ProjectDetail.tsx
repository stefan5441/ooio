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
    <div className="grid grid-cols-1 gap-6 xl:h-full xl:grid-cols-2">
      <h1 className="text-5xl font-bold xl:hidden">{project.name}</h1>

      <div className="order-1 col-span-1 flex flex-col items-center justify-center gap-3 xl:order-2">
        <img
          src={project.projectImgSrc}
          alt={project.name}
          className="rounded-lg"
        />
        {renderActions(project)}
      </div>

      <div className="order-2 col-span-1 space-y-6 text-lg xl:order-1 xl:overflow-y-auto">
        <h1 className="hidden text-5xl font-bold xl:block">{project.name}</h1>
        {renderLeftColumn(project)}
      </div>
    </div>
  );
};
