interface ITeamResponse {
  id: string;
  name: string;
  logo?: string;
}

type ICompetitionResponse = ITeamResponse;

interface IBroadcastResponse {
  channel_id: string;
  name: string;
  logo?: string;
  link?: string;
}

export interface IGameResponseDTO {
  id: string;
  date: Date;
  team_home: ITeamResponse;
  team_away: ITeamResponse;
  competition: ICompetitionResponse;
  broadcasts: IBroadcastResponse[];
}
