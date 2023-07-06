import "./projects.css";

type Props = {
  children: React.ReactNode;
};

const ProjectLayout = ({ children }: Props) => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">{children}</div>
    </div>
  );
};

export default ProjectLayout;
