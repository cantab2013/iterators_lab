var Iterators = require("../src/iterators.js"), 
	expect = require ('chai').expect;	// pull expect method from the Chai library

var myNumbers = [ -1, 2, -3, 4, -5, 6];

var absNumbers = map(myNumbers, function(num){
	return Math.sqrt(num * num)
});

