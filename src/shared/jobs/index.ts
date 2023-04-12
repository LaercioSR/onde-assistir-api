import { CronJob } from "cron";

import { crawlerJob } from "./crawlerJob";
import { saveBroadcastsJob } from "./saveBroadcastsJob";

new CronJob("0 0 4 * * *", crawlerJob).start();
new CronJob("40 6 * * * *", saveBroadcastsJob).start();
