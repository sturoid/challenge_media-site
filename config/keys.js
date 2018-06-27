/* eslint-disable */
const fs = require('fs');

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else if (fs.existsSync(`${__dirname}/dev.js`)) {
  module.exports = require('./dev');
} else {
  console.log('\n\n');
  console.log('#####################################################');
  console.log('#####################################################');
  console.log('## Important: Missing dev.js file in config/dev.js ##');
  console.log('#####################################################');
  console.log('#####################################################');
  console.log('\n\n');
}
