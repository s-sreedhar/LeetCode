function minCost(colors: string, neededTime: number[]): number {
    let ans: number = 0;
    let maxNeededTime: number = neededTime[0];
    for (let i: number = 1; i < colors.length; ++i) {
        if (colors[i] === colors[i - 1]) {
            ans += Math.min(maxNeededTime, neededTime[i]);
            maxNeededTime = Math.max(maxNeededTime, neededTime[i]);
        } else {
            maxNeededTime = neededTime[i];
        }
    }
    return ans;
}
