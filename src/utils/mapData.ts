import type {
  RawData,
  Movie,
} from "../types/Movie";

export function mapFeatured(
  raw: RawData["Featured"]
): Movie {
  return {
    id: raw.Id,
    title: raw.Title,
    coverImage: raw.CoverImage,
    titleImage: raw.TitleImage,
    date: raw.Date,
    releaseYear: raw.ReleaseYear,
    mpaRating: raw.MpaRating,
    category: raw.Category,
    duration: raw.Duration,
    description: raw.Description,
  };
}

export function mapTrending(
  raw: RawData["TendingNow"]
): Movie[] {
  return raw.map((item) => ({
    id: item.Id,
    title: item.Title,
    coverImage: item.CoverImage,
    titleImage: item.TitleImage,
    date: item.Date,
    releaseYear: item.ReleaseYear,
    mpaRating: item.MpaRating,
    category: item.Category,
    duration: item.Duration,
    description: item.Description,
    videoUrl: item.VideoUrl,
  }));
}
