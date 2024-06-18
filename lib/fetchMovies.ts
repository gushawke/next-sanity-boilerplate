// lib/fetchMovies.ts
import { Movie } from '../typings';

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/getMovies`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch movies: ${res.statusText}`);
    }
    const data = await res.json();
    const movies: Movie[] = data.movies;

    return movies;
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    throw error;
  }
};
