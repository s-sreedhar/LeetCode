function minCost(colors, neededTime) {
    let ans = 0;
    let maxNeededTime = neededTime[0];
    for (let i = 1; i < colors.length; ++i) {
        if (colors[i] === colors[i - 1]) {
            ans += Math.min(maxNeededTime, neededTime[i]);
            maxNeededTime = Math.max(maxNeededTime, neededTime[i]);
        } else {
            maxNeededTime = neededTime[i];
        }
    }
    return ans;
}
