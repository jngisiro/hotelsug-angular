export interface Hotel {
  id?: string;
  location: string;
  name: string;
  slug?: string;
  images?: string[];
  coverImage: string;
  description: string;
  summary: string;
  facilities: string[];
  languages: string[];
  availability: boolean;
  price?: {
    ordinary?: number;
    deluxe?: number;
    suite?: number;
  };
  rating?: number;
  ratings?: number;
  rules?: string;
  views?: number;
  address: {
    address: string;
    description: string;
    region: string;
    coordinates?: number[];
  };
}
