function maxFrequencyElements(nums: number[]): number {
    const kMax:number = 100;
    const count:number[] = new Array(kMax + 1).fill(0);  // Initialize count array with zeros
    let ans:number = 0;

    for (const num of nums) {
        count[num]++;
    }

    const maxFreq = Math.max(...count);

    for (const freq of count) {
        if (freq === maxFreq) {
            ans += maxFreq;
        }
    }

    return ans;
};