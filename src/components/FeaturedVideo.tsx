import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";

interface Props {
  movie: Movie;
}

export default function FeaturedVideo({
  movie,
}: Props) {
  const [showVideo, setShowVideo] =
    useState(false);

  useEffect(() => {
    setShowVideo(false);
    const timer = setTimeout(() => {
      if (movie.videoUrl) setShowVideo(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [movie]);

  return (
    <div className="transition-all py-16">
      {/* Background: image or video */}
      {!showVideo ? (
        <div
          className="absolute -z-10 inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${movie.coverImage})`,
          }}
        />
      ) : (
        <video
          className="absolute -z-10 inset-0 w-full h-full object-cover"
          src={movie.videoUrl}
          autoPlay
          muted
        />
      )}

      {/* Content overlay */}
      <div className="relative gap-3 mb-2.5 text-white flex items-start  flex-col">
        <p className="uppercase text-neutral-400 tracking-widest text-sm">
          {movie.category}
        </p>

        {/* Title image */}
        <img
          src={movie.titleImage}
          alt={movie.title}
          className="inline-block max-h-12 object-contain"
        />
        <p>{movie.title}</p>
        <p>
          {movie.releaseYear} • {movie.duration}{" "}
          sec
        </p>
        <p className="max-w-xl text-pretty text-start">
          {movie.description}
        </p>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          type="button"
          className="cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out text-neutral-700 bg-white hover:bg-blue-800 hover:text-white font-medium rounded-full text-sm w-32 py-2 text-center "
        >
          ▶ Play
        </button>
        <button
          type="button"
          className="cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm w-32 py-2 text-center "
        >
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
}
