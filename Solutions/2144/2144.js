var minimumCost = function(cost) {
    let ans = 0;

    cost.sort((a, b) => b - a);

    for (let i = 0; i < cost.length; ++i) {
    if (i % 3 !== 2) {
      ans += cost[i];
    }
  }

  return ans;
};