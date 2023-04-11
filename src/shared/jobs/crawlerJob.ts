import { exec } from "child_process";

export function crawlerJob() {
  exec(
    `python3 ${process.env.CRAWLER_FOLDER}/exportFootballBroadcasts.py`,
    (error) => {
      if (error) {
        console.error(`Error running the script: ${error}`);
      }
    }
  );
}
