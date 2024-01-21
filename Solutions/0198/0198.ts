function rob(nums: number[]): number {
    var prev1:number=0;
    var prev2:number=0;
    for(const num of nums){
        const dp:number=Math.max(prev1,prev2+num);
        prev2=prev1;
        prev1=dp;
    }
    return prev1;
};