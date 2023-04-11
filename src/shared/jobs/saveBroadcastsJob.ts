import footballBroadcasts from "../../../assets/exports/football.json";

export function saveBroadcastsJob() {
  footballBroadcasts.forEach((broadcast) => {
    console.log(`
    competition: ${broadcast.competition}
    date: ${broadcast.date}
    team_home_name: ${broadcast.team_home_name}
    team_home_image: ${broadcast.team_home_image}
    team_away_name: ${broadcast.team_away_name}
    team_away_image: ${broadcast.team_away_image}
    transmissions: ${broadcast.transmissions}
    `);
  });
}
