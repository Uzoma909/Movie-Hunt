import MovieContainer from "@/components/MovieContainer";
import { getDiscoverMovies } from "@/lib/getMovies";

interface Props {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    genre: string;
  }>;
}

const GenrePage = async ({ params, searchParams }: Props) => {
  const { id } = await params;
  const { genre } = await searchParams;

  const movies = await getDiscoverMovies(id);
  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold px-10 mb-5">Results for {genre}</h2>
      <MovieContainer movies={movies} title="Genre" isVertical />
    </div>
  );
};

export default GenrePage;