function matrixReshape(nums: number[][], r: number, c: number): number[][] {
    if (nums.length === 0 || r * c !== nums.length * nums[0].length) {
        return nums;
    }

    const ans: number[][] = new Array(r).fill(0).map(() => new Array(c).fill(0));
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[0].length; j++) {
            ans[Math.floor(k / c)][k % c] = nums[i][j];
            k++;
        }
    }

    return ans;
};