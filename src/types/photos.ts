export interface IPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  likes: number;
  description: string;
  downloads: number;
  views: number;
  urls: {
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string;
    instagram_username: string;
  };
}
