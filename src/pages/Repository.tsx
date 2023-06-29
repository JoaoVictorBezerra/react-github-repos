import React from "react";
import { useQueryClient } from "react-query";
import { Link, useParams } from "react-router-dom";
import { IRepository } from "../interfaces/repositories";
import { convertDate } from "../utils/convertDate";

export function Repository() {

  const params = useParams();
  const currentRepository = params['*'] as string;
  const queryClient = useQueryClient();
  const previousData = queryClient.getQueryData<IRepository[]>("repos")
  const repository = previousData?.find((repository) => repository.name == currentRepository)
  document.title = `Repositório | ${currentRepository}`;


  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li><Link to={'/repositories'}>Repositorios</Link></li>
          </ul>
        </nav>
      </header>
      {
        <div>
          <h1 className="text-4xl">{repository?.name}</h1>
          <p>Descrição: {repository?.description ? repository?.description : 'Repositório sem descrição'}</p>
          <p>Criação: {convertDate(repository?.created_at as string)}</p>
          <p>Última atualização: {convertDate(repository?.updated_at as string)}</p>
          <a href={`https://www.github.com/JoaoVictorBezerra/${repository?.name}`} target="_blank">URL: {repository?.url}</a>
        </div>
      }
    </React.Fragment>
  )
}