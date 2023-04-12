import { CronJob } from "cron";
import { container } from "tsyringe";

import { CrawlerJob } from "./CrawlerJob";
import { SaveBroadcastsJob } from "./SaveBroadcastsJob";

const crawlerJob = container.resolve(CrawlerJob);
new CronJob("0 0 4 * * *", () => crawlerJob.run()).start();
const saveBroadcastsJob = container.resolve(SaveBroadcastsJob);
new CronJob("0 0 4 * * *", () => saveBroadcastsJob.run()).start();
