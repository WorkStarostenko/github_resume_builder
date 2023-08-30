import {ILanguage} from 'interfaces/Language';
import {IRepository} from 'interfaces/Repository';

type NameCountType = {[key: string]: number};
export const formatterLanguages = (languages: NameCountType[]) => {
  const grouped = groupLanguages(languages);
  return calcPercentLanguages(grouped);
};

export const groupLanguages = (
  languages: NameCountType[] = [],
): {name: string; count: number}[] => {
  const map = new Map<string, number>();

  for (const group of languages.flat()) {
    for (const lang in group) {
      if (map.has(lang)) {
        map.set(lang, map.get(lang)! + group[lang]);
      } else {
        map.set(lang, group[lang]);
      }
    }
  }

  return Array.from(map.entries()).map(([name, count]) => ({name, count}));
};
export const calcPercentLanguages = (
  languages: ILanguage[] = [],
): ILanguage[] => {
  const max = languages.reduce((total, curr) => total + curr.count, 0);

  for (let i = 0; i < languages.length; i++) {
    const curr = languages[i].count;
    languages[i].percent = Math.floor((curr * 100) / max);
  }

  return languages.filter(item => item.percent >= 1);
};

export const getLastPublicRepositories = (
  repositories: Array<IRepository> = [],
  limit = 5,
) => {
  return repositories
    .filter(item => !item.private)
    .sort((l, r) => +new Date(r.updated_at) - +new Date(l.updated_at))
    .slice(0, limit);
};
