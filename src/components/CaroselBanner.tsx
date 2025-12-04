import HeroCarousel from "./HeroCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

interface Props {
  id?: string;
  keywords?: string;
}

const CaroselBanner = async ({ id, keywords }: Props) => {
  let movies: any[] = [];

  try {
    const result = await getDiscoverMovies(id, keywords);
    movies = result || [];
  } catch (error) {
    console.error("Error loading carousel movies:", error);
    movies = [];
  }

  return <HeroCarousel movies={movies} />;
};

export default CaroselBanner;