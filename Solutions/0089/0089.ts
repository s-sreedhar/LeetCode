function grayCode(n: number): number[] {
  const ans: number[] = [0];

  for (let i = 0; i < n; i++) {
    for (let j = ans.length - 1; j >= 0; j--) {
      ans.push(ans[j] | (1 << i));
    }
  }

  return ans;
}
