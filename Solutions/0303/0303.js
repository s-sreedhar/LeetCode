class NumArray {
  constructor(nums) {
    this.prefix = new Array(nums.length + 1);
    this.prefix[0] = 0;
    for (let i = 0; i < nums.length; ++i)
      this.prefix[i + 1] = nums[i] + this.prefix[i];
  }

  sumRange(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
  }
}
