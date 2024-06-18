// pages/api/getMovies.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../lib/sanity';
import { Movie } from '../../typings';

const query = groq`
  *[_type == "movie"]{
    _id,
    title,
    overview,
    releaseDate,
    "posterUrl": poster.asset->url
  }`;

type Data = {
  movies: Movie[],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const movies: Movie[] = await sanityClient.fetch(query);
  res.status(200).json({ movies });
}
