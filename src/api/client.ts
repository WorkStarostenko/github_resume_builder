import config from '../config';

const headers = new Headers({
  Authorization: 'Bearer ' + config.GITHUB_TOKEN,
});

const httpClient = async (url: string) => {
  try {
    const response = await fetch(url, {headers});
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default httpClient;
