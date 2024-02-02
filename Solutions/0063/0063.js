var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(n).fill(0);
    dp[0] = 1;

    for (let i = 0; i < m; ++i)
      for (let j = 0; j < n; ++j)
        if (obstacleGrid[i][j] === 1)
          dp[j] = 0;
        else if (j > 0)
          dp[j] += dp[j - 1];

    return dp[n - 1];
};