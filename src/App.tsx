import { useEffect, useState } from "react";
import SidebarMenu from "./components/SidebarMenu";
import FeaturedVideo from "./components/FeaturedVideo";
import {
  mapFeatured,
  mapTrending,
} from "./utils/mapData";
import type {
  Movie,
  RawData,
} from "./types/Movie";
import "./index.css";
import rawData from "./data/movies.json";
import TrendingMovies from "./components/TrendingMovies";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>(
    []
  );
  const [featured, setFeatured] =
    useState<Movie | null>(null);

  const updateLastSeen = (id: string) => {
    const seen = JSON.parse(
      sessionStorage.getItem("lastSeenMovies") ||
        "[]"
    );
    const updated = [
      id,
      ...seen.filter((mId: string) => mId !== id),
    ];
    sessionStorage.setItem(
      "lastSeenMovies",
      JSON.stringify(updated)
    );
  };

  useEffect(() => {
    const data = rawData as RawData;

    // Get trending, max 50, newest first
    const trending = mapTrending(data.TendingNow)
      .slice(0, 50)
      .sort(
        (a, b) =>
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
      );

    // Reorder by last seen from session storage
    const lastSeenIds = JSON.parse(
      sessionStorage.getItem("lastSeenMovies") ||
        "[]"
    );
    if (lastSeenIds.length) {
      trending.sort((a, b) => {
        const aIndex = lastSeenIds.indexOf(a.id);
        const bIndex = lastSeenIds.indexOf(b.id);

        if (aIndex === -1 && bIndex === -1)
          return 0;
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
      });
    }

    setMovies(trending);
    setFeatured(mapFeatured(data.Featured));
  }, []);

  return (
    <div>
      <SidebarMenu />
      <div className="ms-20 flex w-full flex-col justify-between">
        {featured && (
          <FeaturedVideo movie={featured} />
        )}

        <TrendingMovies
          movies={movies}
          onMovieClick={(movie) => {
            setFeatured(movie); // FeaturedVideo will handle its own 2s delay internally
            updateLastSeen(movie.id);
          }}
        />
      </div>
    </div>
  );
}
