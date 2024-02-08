var numSquares = function(n) {
    const dp = new Array(n + 1).fill(n); // 1^2 x n
  dp[0] = 0; // no way
  dp[1] = 1; // 1^2

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j * j <= i; ++j) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n];

};