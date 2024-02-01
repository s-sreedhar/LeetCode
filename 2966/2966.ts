function divideArray(nums: number[], k: number): number[][] {
    const ans: number[][] = new Array(Math.floor(nums.length / 3)).fill(0).map(_ => []);

    nums.sort((a, b) => a - b);

    for (let i = 2, j = 0; i < nums.length; i += 3, j++) {
        if (nums[i] - nums[i - 2] > k) {
            return [];
        }
        ans[j] = [nums[i - 2], nums[i - 1], nums[i]];
    }

    return ans;
}