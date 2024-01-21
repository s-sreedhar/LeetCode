func rob(nums []int) int {
    prev1 := 0  // dp[i - 1]
    prev2 := 0  // dp[i - 2]

    for _, num := range nums {
        dp := max(prev1, prev2+num)
        prev2, prev1 = prev1, dp
    }

    return prev1
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
