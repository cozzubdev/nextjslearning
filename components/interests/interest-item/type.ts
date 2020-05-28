type TwitchData = {
  game_id: string | number;
  id: string | number;
  language: string;
  started_at: Date;
  tag_ids: [string[]];
  thumbnail_url: string;
  title: string;
  type: string;
  user_id: string | number;
  user_name: string;
  viewer_count: number;
};
export interface InterestProps {
  data: TwitchData;
}
