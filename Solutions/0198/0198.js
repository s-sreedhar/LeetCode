var rob = function(nums) {
    prev1=0;
    prev2=0;
    for(const num of nums){
        const dp=Math.max(prev1,prev2+num);
        prev2=prev1;
        prev1=dp;
    }
    return prev1;
};