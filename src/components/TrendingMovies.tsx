import type { Movie } from "../types/Movie";
import { type EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCArousel";

type Props = {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
};

const OPTIONS: EmblaOptionsType = {
  loop: true,
  dragFree: true,
  containScroll: "trimSnaps",
};

export default function TrendingMovies({
  movies,
  onMovieClick,
}: Props) {
  return (
    <div className="mt-6">
      <h2 className="text-white text-xl mb-2">
        Trending Now
      </h2>
      <EmblaCarousel
        movies={movies}
        options={OPTIONS}
        onMovieClick={onMovieClick}
      />
    </div>
  );
}
