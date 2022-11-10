const fs = require("fs");

module.exports = (done, cmd) => {
  fs.readFile(cmd, { encoding: "utf8" }, (err, file) => {
    if (err) {
      done("Something went wrong!");
    } else {
      done("\n" + file);
    }
  });
};
