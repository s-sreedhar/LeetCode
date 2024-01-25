var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
        const n = text2.length;
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        for (let i = 0; i < m; ++i) {
            for (let j = 0; j < n; ++j) {
                dp[i + 1][j + 1] = text1[i] === text2[j] ?
                    1 + dp[i][j] :
                    Math.max(dp[i][j + 1], dp[i + 1][j]);
            }
        }

        return dp[m][n];
};