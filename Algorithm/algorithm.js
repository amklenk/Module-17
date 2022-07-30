// const arraySearch = (num) => {
//     const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];
    
//     for(let i = 0; i <data.length; i++) {
//         if (data[i] === num){
//             console.log(`It's ${num} found at index ${i}`)
//         }
//     };
// };

// arraySearch(71);

//this splits the data by left, right (numbers in asc order)
//if the middle is not it, then either shift to the left ( and right bound is now the value before middle,we are looking for a lesser value)
//Or it shifts to the right and left moves to value after the middle (this is because we are looking for a greater value)
const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
//   let left = 0;
//   let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

//   if (num === arr[middle]) {
//     return 'found it';
//   }
//   else if (num < arr[middle]) {
//     right = middle;
//     return `bring right down to ${right}`;
//   }
//   else if (num > arr[middle]) {
//     left = middle + 1;
//     return `bring left up to ${left}`;
//   }

if (left > right){
    return -1;
} else if (num === arr[middle]){
    return middle;
} else if (num <arr[middle]){
    // try again with the numbers less than the middle, middle - 1 is now right
   return binarySearch(arr, num, left, middle -1);
} else {
    //try again with numbers greater than the middle, middle + 1 is now left
    return binarySearch(arr, num, middle + 1, right);
}
};

// console.log(binarySearch(data, 38));
console.log(binarySearch(data, 12, 0, data.length - 1));