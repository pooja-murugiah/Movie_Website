import { useState } from 'react';
import { Heart, Calendar, Clock, Film, Sparkles } from 'lucide-react';
import { MovieCard } from './components/MovieCard';

interface Movie {
  id: string;
  title: string;
  genre: string;
  emoji: string;
}

const movies: Movie[] = [
  { id: '1', title: 'Fida', genre: 'Romance/Thriller', emoji: '🎬' },
  { id: '2', title: 'La La Land', genre: 'Musical/Romance', emoji: '🎞️' },
  { id: '3', title: 'Da Vinci Code', genre: 'Mystery/Thriller', emoji: '🎥' },
  { id: '4', title: 'Mr. & Mrs. Smith', genre: 'Action/Romance', emoji: '🎦' },
];

const times = ['6:00 PM', '7:30 PM', '9:00 PM'];

export default function App() {
  const [step, setStep] = useState<'initial' | 'wrong' | 'movie' | 'time' | 'confirm' | 'final'>('initial');
  const [selectedMovie, setSelectedMovie] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [showCookie, setShowCookie] = useState(false);
  const [showKiss, setShowKiss] = useState(false);

  const triggerCookie = () => {
    setShowCookie(true);
    setTimeout(() => setShowCookie(false), 1000);
  };

  const handleYes = () => {
    triggerCookie();
    setTimeout(() => setStep('movie'), 300);
  };

  const handleNo = () => {
    setStep('wrong');
  };

  const handleMovieSelect = (movieId: string) => {
    triggerCookie();
    setSelectedMovie(movieId);
    setTimeout(() => setStep('time'), 300);
  };

  const handleTimeSelect = (time: string) => {
    triggerCookie();
    setSelectedTime(time);
    setTimeout(() => setStep('confirm'), 300);
  };

  const handleConfirm = () => {
    setTimeout(() => {
      setStep('final');
      setShowKiss(true);
      setTimeout(() => setShowKiss(false), 2000);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#440303] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Film strip patterns on left and right */}
      <div className="fixed left-0 top-0 bottom-0 w-16 bg-[#2a0101] border-r-4 border-[#561c24] z-0">
        <div className="flex flex-col h-full">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 border-b-2 border-[#561c24] relative">
              <div className="absolute inset-y-2 left-2 right-2 bg-[#1a0000] rounded"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed right-0 top-0 bottom-0 w-16 bg-[#2a0101] border-l-4 border-[#561c24] z-0">
        <div className="flex flex-col h-full">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 border-b-2 border-[#561c24] relative">
              <div className="absolute inset-y-2 left-2 right-2 bg-[#1a0000] rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Cookie animation in center */}
      {showCookie && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="animate-cookieZoom">
            🍪
          </div>
        </div>
      )}

      {/* Kiss animation in center */}
      {showKiss && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="animate-kissZoom">
            💋
          </div>
        </div>
      )}

      <div className="max-w-2xl w-full z-10">
        {step === 'initial' && (
          <div className="bg-[#68030350] backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden animate-fadeIn border border-[#561c24]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#561c24] rounded-full blur-3xl opacity-30 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#561c24] rounded-full blur-3xl opacity-30 -ml-16 -mb-16"></div>
            
            <div className="relative text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-[#561c24] p-4 rounded-full">
                  <Film className="w-8 h-8 text-[#e5d29a]" />
                </div>
              </div>
              <div className="mb-8 space-y-2">
                <div className="text-[#e5d29a]" style={{ fontFamily: 'Aboreto, cursive', fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1.2' }}>
                  Would you like a
                </div>
                <div className="text-[#e5d29a]" style={{ fontFamily: 'Allura, cursive', fontSize: '4rem', fontWeight: 'bold', lineHeight: '1' }}>
                  Movie
                </div>
                <div className="text-[#e5d29a]" style={{ fontFamily: 'Aboreto, cursive', fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1.2' }}>
                  date with me
                </div>
                <div className="text-[#e5d29a]" style={{ fontFamily: 'Allura, cursive', fontSize: '4rem', fontWeight: 'bold', lineHeight: '1' }}>
                  shawtyy???
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleYes}
                  className="relative px-12 py-4 rounded-xl bg-[#561c24] hover:bg-[#6d2330] text-[#e5d29a] shadow-lg hover:shadow-xl transition-all"
                >
                  YES 💕
                </button>
                <button
                  onClick={handleNo}
                  className="relative px-12 py-4 rounded-xl bg-[#561c24] hover:bg-[#6d2330] text-[#e5d29a] shadow-lg hover:shadow-xl transition-all"
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 'wrong' && (
          <div className="bg-[#68030350] backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-fadeIn border border-[#561c24]">
            <div className="flex justify-center mb-6">
              <div className="text-6xl animate-bounce">❌</div>
            </div>
            <h1 className="mb-6 text-[#e5d29a]">
              Wrong Answer! 🙅‍♀️
            </h1>
            <p className="text-[#e5d29a] mb-6 opacity-80">Try again!</p>
            <button
              onClick={() => setStep('initial')}
              className="px-8 py-3 rounded-xl bg-[#561c24] hover:bg-[#6d2330] text-[#e5d29a] shadow-lg hover:shadow-xl transition-all"
            >
              Go Back
            </button>
          </div>
        )}

        {step === 'movie' && (
          <div className="bg-[#68030350] backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden animate-fadeIn border border-[#561c24]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#561c24] rounded-full blur-3xl opacity-30 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#561c24] rounded-full blur-3xl opacity-30 -ml-16 -mb-16"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 text-[#e5d29a]">
                  <Sparkles className="w-4 h-4" />
                  <h2>Choose a Movie 🎬</h2>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    isSelected={false}
                    onSelect={() => handleMovieSelect(movie.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 'time' && (
          <div className="bg-[#68030350] backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden animate-fadeIn border border-[#561c24]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#561c24] rounded-full blur-3xl opacity-30 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#561c24] rounded-full blur-3xl opacity-30 -ml-16 -mb-16"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 text-[#e5d29a]">
                  <Clock className="w-5 h-5" />
                  <h2>Pick a Time ⏰</h2>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className="relative p-4 rounded-xl border-2 border-[#561c24] hover:bg-[#561c2450] transition-all"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <Calendar className="w-5 h-5 text-[#e5d29a]" />
                      <span className="text-[#e5d29a]">{time}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 'confirm' && (
          <div className="bg-[#68030350] backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-fadeIn border border-[#561c24]">
            <div className="flex justify-center mb-6">
              <div className="bg-[#561c24] p-6 rounded-full animate-bounce">
                <Heart className="w-12 h-12 text-[#e5d29a] fill-[#e5d29a]" />
              </div>
            </div>
            <h1 className="mb-4 text-[#e5d29a]">
              Perfect! It's a Date! 🎉
            </h1>
            <div className="space-y-3 text-[#e5d29a] mb-8">
              <p>
                <strong>Movie:</strong>{' '}
                {movies.find((m) => m.id === selectedMovie)?.title}{' '}
                {movies.find((m) => m.id === selectedMovie)?.emoji}
              </p>
              <p>
                <strong>Time:</strong> {selectedTime} ⏰
              </p>
            </div>
            <button
              onClick={handleConfirm}
              className="relative px-8 py-4 rounded-xl bg-[#561c24] hover:bg-[#6d2330] text-[#e5d29a] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mx-auto"
            >
              <span>Confirm Date</span>
              <span className="text-xl">💋</span>
            </button>
            <button
              onClick={() => {
                setStep('initial');
                setSelectedMovie('');
                setSelectedTime('');
              }}
              className="mt-4 text-[#e5d29a] hover:text-[#f5e2b0] underline"
            >
              Start over
            </button>
          </div>
        )}

        {step === 'final' && (
          <div className="bg-[#68030350] backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-fadeIn border border-[#561c24]">
            <div className="flex justify-center mb-6">
              <div className="text-8xl animate-pulse">💋</div>
            </div>
            <h1 className="mb-4 text-[#e5d29a]" style={{ fontFamily: 'Allura, cursive', fontSize: '3rem' }}>
              Can't wait to see you!
            </h1>
            <p className="text-[#e5d29a] mb-8 opacity-90">
              See you at {selectedTime} for {movies.find((m) => m.id === selectedMovie)?.title}! 💕
            </p>
            <button
              onClick={() => {
                setStep('initial');
                setSelectedMovie('');
                setSelectedTime('');
              }}
              className="px-8 py-3 rounded-xl bg-[#561c24] hover:bg-[#6d2330] text-[#e5d29a] shadow-lg hover:shadow-xl transition-all"
            >
              Start over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}