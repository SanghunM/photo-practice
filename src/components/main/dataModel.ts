export enum URL_TYPE {
  raw,
  full,
  regular,
  small,
  thumb,
  small_s3,
}

export type CardItemType = {
  id: string;
  urls: any;
  created_at: string;
  links: { [key in URL_TYPE]: string };
  likes: number;
  category: [string];
  username: string;
  total_likes: number;
  total_collections: number;
  total_photos: number;
};
