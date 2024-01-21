func minFallingPathSum(A [][]int) int {
  n := len(A)

  for i := 1; i < n; i++ {
    for j := 0; j < n; j++ {
      mini := math.MaxInt64
      for k := max(0, j-1); k < min(n, j+2); k++ {
        mini = min(mini, A[i-1][k])
      }
      A[i][j] += mini
    }
  }

  minValue := math.MaxInt64
  for _, v := range A[n-1] {
    minValue = min(minValue, v)
  }
  return minValue
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}

func min(a, b int) int {
  if a < b {
    return a
  }
  return b
}
