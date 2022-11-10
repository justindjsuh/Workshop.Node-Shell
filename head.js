const fs = require('fs');

module.exports = (done, cmd) => {
  cmd.forEach((fileName, index) => {
    fs.readFile(fileName, { encoding: 'utf8' }, (err, files) => {
      if (err) {
        done('Something went wrong!');
      } else {
        process.stdout.write(`\n==> ${cmd[index]} <==\n`);
        const fileArr = files.split('\n');
        process.stdout.write(fileArr.slice(0, 10).join('\n') + '\n');
        if (index === cmd.length - 1) {
          process.stdout.write('\nprompt > ');
        }
      }
    });
  });
};
