const Benchmark = require('benchmark');
const { linearSearch, binarySearch } = require('./search');

const numbers = [];
for (let i = 0; i <= 1000000; i++){
    //populate the array with numbers 1 to 1,000,000
    numbers.push(i);
}

// grab the last number in the array as the number we want to find
// const target = numbers[numbers.length-1];

//or use the first number (it's faster!)
const target = numbers[0];

const suite = new Benchmark.Suite;

suite.add('linear search', function (){
    //benchmark generating a random number
    linearSearch(numbers, target);
}).add('binary search', function() {
    binarySearch(numbers, target, 0, numbers.length-1)
}).on('complete', function(){
    // print the test's name and average time in ms
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
}).run();