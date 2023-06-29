import React from "react";
import { useQuery } from "react-query";
import { IRepository } from "../interfaces/repositories";
import { apiGithub } from "../services/apiGithub";
import { Link } from "react-router-dom";

export function Repositories() {
  const { data, isFetching } = useQuery<IRepository[]>("repos", async () => {
    const response = await apiGithub.get('/users/joaovictorbezerra/repos');
    return response.data;
  }, {
    staleTime: 1000 * 15,
  });
  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li><Link to={'/repositories'}>Repositorios</Link></li>
          </ul>
        </nav>
      </header>
      <div className="bg-zinc-900 h-screen">
        <ul className="space-y-2">
          {
            data?.map((repository) => {
              { isFetching && <h1>Não carregou ainda</h1> }
              return (
                <li key={repository.id} className="text-zinc-100 hover:text-zinc-100/40 transition-colors"><Link to={`/repository/${repository.name}`}>{repository.name}</Link></li>
              )
            })
          }
        </ul>
      </div>
      <footer className="bg-zinc-800">
        <p>a</p>
      </footer>
    </React.Fragment>
  )
}