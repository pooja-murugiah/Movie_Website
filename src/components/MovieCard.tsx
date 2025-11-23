interface Movie {
  id: string;
  title: string;
  genre: string;
  emoji: string;
}

interface MovieCardProps {
  movie: Movie;
  isSelected: boolean;
  onSelect: () => void;
}

export function MovieCard({ movie, isSelected, onSelect }: MovieCardProps) {
  return (
    <button
      onClick={onSelect}
      className="relative p-4 rounded-xl border-2 border-[#561c24] hover:bg-[#561c2450] transition-all text-left"
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl">{movie.emoji}</div>
        <div className="flex-1">
          <h3 className="text-[#e5d29a] mb-1" style={{ fontFamily: 'Allura, cursive', fontSize: '1.5rem' }}>
            {movie.title}
          </h3>
          <p className="text-sm text-[#e5d29a] opacity-70" style={{ fontFamily: 'Aboreto, cursive' }}>
            {movie.genre}
          </p>
        </div>
      </div>
    </button>
  );
}
