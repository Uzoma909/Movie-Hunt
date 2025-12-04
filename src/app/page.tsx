
import CaroselBanner from "@/components/CaroselBanner";
import MovieContainer from "@/components/MovieContainer";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  try {
    const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] =
      await Promise.all([
        getNowPlayingMovies().catch(() => []),
        getUpcomingMovies().catch(() => []),
        getTopRatedMovies().catch(() => []),
        getPopularMovies().catch(() => []),
      ]);

    return (
      <main>
        <CaroselBanner />
        <div className="flex flex-col space-y-2">
          {nowPlayingMovies?.length > 0 && (
            <MovieContainer movies={nowPlayingMovies} title="Now Playing" />
          )}
          {upcomingMovies?.length > 0 && (
            <MovieContainer movies={upcomingMovies} title="Upcoming" />
          )}
          {topRatedMovies?.length > 0 && (
            <MovieContainer movies={topRatedMovies} title="Top Rated" />
          )}
          {popularMovies?.length > 0 && (
            <MovieContainer movies={popularMovies} title="Popular" />
          )}
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error loading movies:", error);
    return (
      <main>
        <CaroselBanner />
        <div className="flex flex-col space-y-2">
          <p className="text-center text-gray-400 py-10">
            Unable to load movies. Please try again later.
          </p>
        </div>
      </main>
    );
  }
}