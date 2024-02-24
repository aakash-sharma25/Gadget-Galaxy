const cron = require("node-cron");
const axios = require("axios");
exports.jobScheduler = async () => {
  cron.schedule("*/30 * * * * *", () => {
    job();
  });
};

const job = async () => {
  //    console.log("after fetch requrest")
  let count = 1;
//   console.log(count)
  count++;
//   console.log(count)
};
