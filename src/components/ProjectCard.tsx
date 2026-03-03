import { useNavigate } from "react-router-dom";

type Props<T extends { id: string; name: string; projectImgSrc: string }> = {
  project: T;
  basePath: string;
  cardHeight: string;
  renderContent: (project: T) => React.ReactNode;
};

export const ProjectCard = <
  T extends { id: string; name: string; projectImgSrc: string },
>({
  project,
  basePath,
  cardHeight,
  renderContent,
}: Props<T>) => {
  const navigate = useNavigate();

  return (
    <div
      key={project.name}
      onClick={() => navigate(`${basePath}/${project.id}`)}
      className={`bg-surface hover:ring-primary-hover flex ${cardHeight} cursor-pointer flex-col rounded-xl transition-all duration-200 hover:-translate-y-1 hover:ring-2`}
    >
      <div className="h-48 overflow-hidden rounded-t-xl">
        <img
          src={project.projectImgSrc}
          alt={project.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      {renderContent(project)}
    </div>
  );
};
