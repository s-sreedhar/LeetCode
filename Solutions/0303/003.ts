class NumArray {
  private prefix: number[];

  constructor(nums: number[]) {
    this.prefix = new Array(nums.length + 1);
    this.prefix[0] = 0;
    for (let i = 0; i < nums.length; ++i)
      this.prefix[i + 1] = nums[i] + this.prefix[i];
  }

  sumRange(left: number, right: number): number {
    return this.prefix[right + 1] - this.prefix[left];
  }
}