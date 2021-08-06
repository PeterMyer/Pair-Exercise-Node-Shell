const fs = require('fs');

const cat = function() {
fs.readFile(fileName, (err, data) => {
  if (err) throw err;
  console.log(data);
})}

module.exports = cat
