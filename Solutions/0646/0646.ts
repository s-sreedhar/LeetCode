function findLongestChain(pairs: number[][]): number {
     var ans=0;
    var prevEnd=Math.log(0);
    pairs.sort((a,b)=>a[1]-b[1]);
    for(const [s,e] of pairs){
        if(s>prevEnd){
            ++ans;
            prevEnd=e;
        }
    }
    return ans;
};