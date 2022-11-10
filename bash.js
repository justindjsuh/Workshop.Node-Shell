const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const echo = require('./echo');
const date = require('./date');

function done(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  let cmd = data.toString().trim();
  cmd = cmd.split(' ');
  if (cmd[0] === 'pwd') {
    pwd(done);
  } else if (cmd[0] === 'ls') {
    ls(done);
  } else if (cmd[0] === 'cat') {
    cat(done, cmd[1]);
  } else if (cmd[0] === 'echo') {
    cmd.shift();
    echo(done, cmd.join(' '));
  } else if (cmd[0] === 'date') {
    date(done);
  }
});
