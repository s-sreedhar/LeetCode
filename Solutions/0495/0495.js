var findPoisonedDuration = function(timeSeries, duration) {
    if (duration === 0)
           return 0;

       let ans = 0;

       for (let i = 0; i + 1 < timeSeries.length; ++i)
           ans += Math.min(timeSeries[i + 1] - timeSeries[i], duration);

       return ans + duration;
};