import { Request, Response } from 'express';
import axios from 'axios';

type GitHubContributor = {
  login: string;
  id: number;
  url: string;
};

type GitHubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
};

export const getAll = async (req: Request, res: Response) => {
  const { data, status } = await axios.get<GitHubContributor[]>(
    'https://api.github.com/repos/GeraAlcantara/Votaciones_Premios_Back-end/contributors',
  );

  if (status === 200) {
    const promises = data.map((contributor) => {
      return axios.get<GitHubUser>(contributor.url);
    });

    const users = await Promise.all(promises).then((values) => {
      return values.map(({ data }) => ({
        username: data.login,
        avatar: data.avatar_url,
        url: data.html_url,
        name: data.name,
        bio: data.bio,
      }));
    });

    return res.json(users);
  }

  return res.json([]);
};
