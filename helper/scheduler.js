const cron = require("node-cron");
exports.jobScheduler = async () => {
  cron.schedule("*/30 * * * * *", () => {
    job();
  });
};

const job = async () => {
  let count = 1;
  count++;
};
