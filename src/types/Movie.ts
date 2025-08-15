export interface RawFeatured {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  Description: string;
  VideoUrl?: string;
}

export interface RawTrending {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl: string;
  Description: string;
}

export interface RawData {
  Featured: RawFeatured;
  TendingNow: RawTrending[];
}

export interface Movie {
  id: string;
  title: string;
  coverImage: string;
  titleImage: string;
  date: string;
  releaseYear: string;
  mpaRating: string;
  category: string;
  duration: string;
  description: string;
  videoUrl?: string;
}
