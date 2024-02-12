/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
      let ans;
  
      for (const num of nums) {
          if (count === 0) {
              ans = num;
          }
          count += ans === num ? 1 : -1;
      }
  
      return ans;  
  };