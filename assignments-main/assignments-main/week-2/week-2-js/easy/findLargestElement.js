/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
function findLargestElement(numbers) {
    let maxn=numbers[0];
    for(let i=0;i<numbers.length;i++){
        max=numbers[i];
    }
    return max;
}
console.log(findLargestElement([-4,-5,-6,-8]));
module.exports = findLargestElement;