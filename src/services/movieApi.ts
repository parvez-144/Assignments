const API_URL = 'https://dummyapi.online/api/movies';

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
}