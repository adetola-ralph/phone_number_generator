var fs = require('fs');

module.exports = {
  read: function (fileLocation) {
    return new Promise(function (resolve, reject) {
      fs.readFile(fileLocation, function (err, data) {
        if (err) {
          return reject(err);
        }

        return resolve(JSON.parse(data));
      });
    });
  },

  write: function (fileLocation, data) {
    return new Promise(function (resolve, reject) {
      fs.writeFile(fileLocation, JSON.stringify(data), function (err) {
        if (err) {
          return reject(err);
        }

        return resolve();
      });
    });
  },
};
