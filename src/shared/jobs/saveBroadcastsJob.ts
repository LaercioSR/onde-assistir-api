import fs from "fs";
import path from "path";

export function saveBroadcastsJob() {
  const footballBroadcastsFile = path.resolve(
    __dirname,
    "../../../assets/exports/football.json"
  );

  if (fs.existsSync(footballBroadcastsFile)) {
    const fileData = fs.readFileSync(footballBroadcastsFile);
    const footballBroadcasts = JSON.parse(fileData as unknown as string);

    const competitions = new Set<string>();
    const broadcasts = new Set<string>();

    footballBroadcasts.forEach((broadcast) => {
      // console.log(`
      // competition: ${broadcast.competition}
      // date: ${broadcast.date}
      // team_home_name: ${broadcast.team_home_name}
      // team_home_image: ${broadcast.team_home_image}
      // team_away_name: ${broadcast.team_away_name}
      // team_away_image: ${broadcast.team_away_image}
      // transmissions: ${broadcast.transmissions}
      // `);
    });

    competitions.forEach((competition) => console.log(competition));
    broadcasts.forEach((broadcast) => console.log(broadcast));
  }
}
