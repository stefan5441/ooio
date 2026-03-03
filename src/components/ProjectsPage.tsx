import { ProjectCard } from "./ProjectCard";

type Props<T extends { id: string; name: string; projectImgSrc: string }> = {
  projects: T[];
  basePath: string;
  cardHeight?: string;
  renderCardContent: (project: T) => React.ReactNode;
};

export const ProjectsPage = <
  T extends { id: string; name: string; projectImgSrc: string },
>({
  projects,
  basePath,
  cardHeight = "h-80",
  renderCardContent,
}: Props<T>) => {
  return (
    <div className="grid w-full grid-cols-3 items-start gap-6 px-1 py-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          basePath={basePath}
          renderContent={renderCardContent}
          cardHeight={cardHeight}
        />
      ))}
    </div>
  );
};
