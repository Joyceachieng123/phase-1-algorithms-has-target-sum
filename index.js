function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
        const sum = array[i] + array[j];
        if (sum === target) {
            return true;
        }
    }
}
return false;
}

/* 
  Write the Big O time complexity of your function here
The Big O time complexity of the given function is quadratic,This is because the function uses nested loops, and for each element in the input array `array` of length 'n', it iterates through all possible pairs of elements.  
*/

/* 
  Add your pseudocode here
1.Start looping through the elements in the 'array' using a for loop, denoted by variable i from 0 to arr.length - 1.
2.Inside the outer loop, start another loop using j, which runs from i + 1 to array.length.
3.Calculate the sum of elements at indices i and j and store it in the sum variable.
4.Check if the sum is equal to the target. If it is, return true because we've found a pair of elements that add up to the target.
5.If the inner loop completes without finding a pair, continue to the next element in the outer loop.
6.If the outer loop completes without finding any pairs, return false.

*/

/*
  Add written explanation of your solution here
-The function uses a nested loop to compare each pair of elements in the array with every other element in the array.
-It calculates the sum of each pair and checks if it's equal to the target. 
-If a pair is found that adds up to the target, the function returns true. 
-If no such pair is found after examining all possible pairs, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
