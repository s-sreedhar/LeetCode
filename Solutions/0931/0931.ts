function minFallingPathSum(A: number[][]): number {
  const n = A.length;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let mini = Infinity;
      for (let k = Math.max(0, j - 1); k < Math.min(n, j + 2); k++) {
        mini = Math.min(mini, A[i - 1][k]);
      }
      A[i][j] += mini;
    }
  }

  return Math.min(...A[n - 1]);
}
