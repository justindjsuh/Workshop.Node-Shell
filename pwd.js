const process = require("process");

module.exports = (done) => {
  done(process.cwd());
};
