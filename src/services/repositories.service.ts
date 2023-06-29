import { QueryKey, useQuery } from "react-query";
import { IRepository } from "../interfaces/repositories";
import { apiGithub } from "./apiGithub";

export async function getRepositories(url: string) {
  const response = await apiGithub.get(url);
  return response.data;
}
