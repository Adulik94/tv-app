import React from "react";
import { type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { Movie } from "../types/Movie";

type PropType = {
  movies: Movie[];
  options?: EmblaOptionsType;
  onMovieClick?: (movie: Movie) => void;
};

const EmblaCarousel: React.FC<PropType> = ({
  movies,
  options,
  onMovieClick,
}) => {
  const [emblaRef] = useEmblaCarousel(
    {
      ...options,
      align: "start",
      loop: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: true,
      }),
    ]
  );

  return (
    <section className="px-4 py-2.5">
      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="shrink-0 mx-2 basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-[11%] cursor-pointer"
              onClick={() =>
                onMovieClick?.(movie)
              }
            >
              <img
                className="size-full hover:scale-110 transform transition-all ease-in-out duration-300 object-cover rounded-lg"
                src={movie.coverImage}
                alt={movie.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
