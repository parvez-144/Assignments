import React from 'react';
import { Star } from 'lucide-react';
import type { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={movie.image}
        alt={movie.movie}
        className="w-full h-64 object-cover"
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=640';
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{movie.movie}</h3>
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="text-gray-700">{movie.rating}/10</span>
        </div>
        <p className="text-gray-600">Year: {movie.year}</p>
        <a
          href={movie.imdb_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          View on IMDB
        </a>
      </div>
    </div>
  );
}