var maxFrequencyElements = function(nums) {
    const kMax = 100;
    const count = new Array(kMax + 1).fill(0);  // Initialize count array with zeros
    let ans = 0;

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