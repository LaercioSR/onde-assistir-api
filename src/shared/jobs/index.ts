import { CronJob } from "cron";

import { crawlerJob } from "./crawlerJob";
import { saveBroadcastsJob } from "./saveBroadcastsJob";

new CronJob("0 0 4 * * *", crawlerJob).start();
new CronJob("0 30 4 * * *", saveBroadcastsJob).start();
