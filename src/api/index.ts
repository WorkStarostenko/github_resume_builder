import httpClient from './client';
import config from '../config';

export const getUser = (username: string): Promise<any> => {
  return httpClient(`${config.API}/users/${username}`) as Promise<any>;
};

export const getRepositories = (url: string): Promise<[]> => {
  return httpClient(url) as Promise<[]>;
};

export const getReposLanguages = async (repositories: []): Promise<any[]> => {
  const requests = repositories.map((repo: any) =>
    httpClient(repo.languages_url),
  );

  return await Promise.all(requests);
};
