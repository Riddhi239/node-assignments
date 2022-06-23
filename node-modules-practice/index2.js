const _ = require("lodash"); 
let arr= [1,2,3,4,5,"t","yu","m"];
console.log(_.isNumber(100)); 
console.log(_.isNumber('GeeksforGeeks courses')); 
console.log(_.isNumber(78.43));
console.log(_.chunk(arr,3));