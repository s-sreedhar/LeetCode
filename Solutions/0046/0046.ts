function permute(nums: number[]): number[][] {
  const ans: number[][] = [];

  function dfs(used: boolean[], path: number[]) {
    if (path.length === nums.length) {
      ans.push([...path]); // Clone path to avoid mutation
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      dfs(used, path);
      path.pop();
      used[i] = false;
    }
  }

  dfs(new Array(nums.length).fill(false), []);
  return ans;
}
