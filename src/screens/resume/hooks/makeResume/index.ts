import {useCallback, useEffect, useState} from 'react';
import {getRepositories, getReposLanguages, getUser} from 'api/index';
import {IUser} from 'interfaces/User';
import {IRepository} from 'interfaces/Repository';
import {ILanguage} from 'interfaces/Language';

import {formatterLanguages, getLastPublicRepositories} from './utils';

interface UserData {
  overview: IUser;
  formattedLanguages: Array<ILanguage>;
  publicRepositories: Array<IRepository>;
}

export const useMakeResume = (username: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String>();
  const [data, setUserData] = useState<UserData>();

  const reportError = (err: any) => {
    const message = err instanceof Error ? err.message : String(err);
    setError(() => message);
  };

  const fetchData = useCallback(async () => {
    try {
      const overview = await getUser(username);

      if (!overview?.id) {
        throw new Error(overview.message);
      }

      const repositories = await getRepositories(overview.repos_url);

      const languages = await getReposLanguages(repositories);

      const formattedLanguages = formatterLanguages(languages);

      const publicRepositories = getLastPublicRepositories(repositories);

      setUserData(() => ({
        overview,
        publicRepositories,
        formattedLanguages,
      }));
    } catch (err) {
      reportError(err);
    } finally {
      setLoading(() => false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {loading, error, data};
};
