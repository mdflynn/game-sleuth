export interface PreviewInfo {
  id: string;
  name: string;
  min_players: number;
  max_players: number;
  image_url: string;
  rank: number;
}

export interface MyBoardGame extends PreviewInfo {
  min_age: number;
  description: string;
  price: string;
  url: string;
  primary_publisher: { name: string };
  mechanics: { id: string }[];
  average_user_rating: number;
  num_user_ratings: number;
  trending_rank: number;
  rules_url: string;
}
