const date = require('date-and-time');

module.exports = (done) => {
  let now = new Date();
  const value = date.format(now, 'ddd MMM DD HH:mm:ss [EST] YYYY');
  done(value);
};
