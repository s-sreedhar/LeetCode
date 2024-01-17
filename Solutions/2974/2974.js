function numberGame(nums) {
  nums.sort((a,b)=>a-b); // Sort in ascending order
  for (let i = 0; i < nums.length; i += 2) {
    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]; // Swap elements
  }
  return nums;
}
