// typings.d.ts
export interface Movie {
    _id: string;
    title: string;
    overview: any; // Change this to 'any' to accommodate PortableText
    releaseDate: string;
    posterUrl: string;
  }
  