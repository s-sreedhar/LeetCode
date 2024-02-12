function majorityElement(nums: number[]): number {
    let count = 0;
    let ans: number;

    for (const num of nums) {
        if (count === 0) {
            ans = num;
        }
        count += ans === num ? 1 : -1;
    }

    return ans;
};