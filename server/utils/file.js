var fs = require('fs');

module.exports = {
  read: function (fileLocation) {
    return new Promise(function (resolve, reject) {
      fs.readFile(fileLocation, { flag: 'a+' },function (err, data) {
        if (err) {
          return reject(err);
        }

        try {
          resolve(JSON.parse(data));
        } catch (err) {
          resolve([]);
        }
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

  clear: function (fileLocation) {
    return new Promise(function (resolve, reject) {
      fs.writeFile(fileLocation, '[]', function (err) {
        if (err) {
          return reject(err);
        }

        resolve();
      });
    });
  },
};
