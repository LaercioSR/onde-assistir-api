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
  date: Date | string;
  team_home: ITeamResponse;
  team_away: ITeamResponse;
  competition: ICompetitionResponse;
  broadcasts: IBroadcastResponse[];
}

export interface IGameTimeResponseDTO {
  id: string;
  time: string;
  team_home: ITeamResponse;
  team_away: ITeamResponse;
  competition: ICompetitionResponse;
  broadcasts: IBroadcastResponse[];
}
