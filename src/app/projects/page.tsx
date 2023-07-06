import React from "react";
import { getProjects } from "./services";
import { Card } from "../../components";

type Props = {};
async function FetchProjects() {
  const projects = await getProjects();
  return projects;
}

const ProjectPage = async (props: Props) => {
  const projects = await FetchProjects();
  return (
    <>
      {projects.map((project) => {
        return <Card data={project} key={project.id} />;
      })}
    </>
  );
};

export default ProjectPage;
