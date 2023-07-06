import { Project } from "../models";

export const getProjects = (): Promise<Project[]> => {
  const url = "http://localhost:3001/project";
  return fetch(url,{ method: 'GET'})
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
};
