const cron = require("node-cron");
const axios = require("axios");
exports.jobScheduler = async () => {
  cron.schedule("*/30 * * * * *", () => {
    job();
  });
};

const job = async () => {
  let count = 1;
  count++;
};
