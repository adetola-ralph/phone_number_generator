var avlTree = require('avl');

var source = require('./../utils/file');

var phoneNumberModel = (function () {
  var modelInstance;

  function init() {
    var tree = new avlTree(undefined, true);


    var loadResource = function () {
      source.read('numbers.json').then(function (data) {
        tree.load(data);
      });
    };

    // load file here
    loadResource();

    return {
      getNumber: function (value) {
        return tree.find(value);
      },

      getMax: function () {
        return tree.max();
      },

      getMin: function () {
        return tree.min();
      },

      getTotalNumber: function () {
        return tree.keys().length;
      },

      addValue: function (valuearray) {
        valuearray.forEach(function (value) {
          tree.insert(value);
        });

        return source.write('numbers.json', tree.keys());
      },

      getAll: function () {
        return tree.keys();
      },

      findNumber: function (value) {
        var node = tree.find(value);

        if (node) {
          return true;
        }

        return false;
      },
    };
  }

 return {
   getModelInstance: function () {
     if (!modelInstance) {
       modelInstance = init();
     }

     return modelInstance;
   }
 };
})();

module.exports = phoneNumberModel.getModelInstance();
