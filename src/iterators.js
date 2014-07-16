
var Iterators = (function() {
  var api = {
    
    // Find max number in an array of numbers
    max: function(numList){
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] > max ) {
          max = numList[i];
        }
      };
      return max;
    },

    // Find min number in an array of numbers
    min: function(numList){
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] < min ) {
          min = numList[i];
        }
      };
      return min;
    },

    // Does an action (a function) for each element of the array list
    each: function(list, action){
      for (var i = 0; i < list.length; i++) {
        action(list[i]); 
      };
      return list;
    },

    // Creates a 1-to-1 mapped array after manipulating 'action' to each items in numList array 
    map: function(numList, action){
      var arr = [];
      for (var i = 0; i < numList.length; i++) {        
        arr.push(action(numList[i]));
      };
      return arr;
    },

    // Filter out the elements in numList that DON'T satisfy conditions specified in function 'action'
    filter: function(numList, action){
      var arr = [];
      for (var i = 0; i < numList.length; i++) {        
        if (action(numList[i]) === true)
          arr.push(action(numList[i]));
      };
      return arr;
    }, 

    // Do something to each element of the array in an accumulative fashion, i.e. result of which feeds into input of function operating on the next element
    reduce: function(numList, action){
      var arr = [];
      var result = action(numList[0]);

      for (var i = 1; i < numList.length ; i++) {        
        result = action(result, numList[i]);
      };
      return result;
    }, 

    // Filter out the elements in numList that satisfy conditions specified in function 'action'
    reject: function(numList, action){
      var arr = [];
      for (var i = 0; i < numList.length; i++) {        
        if (action(numList[i]) === false)
          arr.push(action(numList[i]));
      };
      return arr;
    } 
  };

  return api;
})();

module.exports = Iterators;