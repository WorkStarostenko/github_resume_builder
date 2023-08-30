export interface IRepository {
  id: number;
  node_id: string;
  name: string;
  private: boolean;
  html_url: string;
  url: string;
  languages_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  watchers_count: number;
  forks: number;
  open_issues: number;
  watchers: number;
}
