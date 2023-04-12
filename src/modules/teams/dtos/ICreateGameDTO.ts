interface ICreateGameDTO {
  team_home_id: string;
  team_away_id: string;
  competition_id?: string;
  date: Date;
}

export { ICreateGameDTO };
