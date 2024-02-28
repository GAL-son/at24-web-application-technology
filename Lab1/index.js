let service = require('./service');

service.getOdd([1,2,3,4,5,6,7,7,8,9,12,-2,-3]).forEach(number => {
   console.log(number); 
});