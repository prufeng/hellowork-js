var currency = require('./lib/currency'); //exports
console.log('Test 0: 50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUS(50));
console.log('Test 0: 30 US dollars equals this amount of Canadian dollars:');
console.log(currency.USToCanadian(30));

var canadianDollar = 0.91;
var Currency = require('./lib/currency1'); //module.exports
var currency1 = new Currency(canadianDollar);

console.log('Test 1: 50 Canadian dollars equals this amount of US dollars:');
console.log(currency1.canadianToUS(50));
console.log('Test 1: 30 US dollars equals this amount of Canadian dollars:');
console.log(currency1.USToCanadian(30));

var Currency2 = require('./currency2'); //directory/index.js
var currency2 = new Currency2(canadianDollar);

console.log('Test 2: 50 Canadian dollars equals this amount of US dollars:');
console.log(currency2.canadianToUS(50));
console.log('Test 2: 30 US dollars equals this amount of Canadian dollars:');
console.log(currency2.USToCanadian(30));

var Currency3 = require('./currency3'); //directory/nonindex.js
var currency3 = new Currency3(canadianDollar);

console.log('Test 3: 50 Canadian dollars equals this amount of US dollars:');
console.log(currency3.canadianToUS(50));
console.log('Test 3: 30 US dollars equals this amount of Canadian dollars:');
console.log(currency3.USToCanadian(30));