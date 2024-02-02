var sequentialDigits = function(low, high) {
    let ans = [];
  let q = Array.from({ length: 9 }, (_, i) => i + 1);

  while (q.length > 0) {
    let num = q.shift();
    if (num > high) {
      return ans;
    }
    if (low <= num && num <= high) {
      ans.push(num);
    }
    let lastDigit = num % 10;
    if (lastDigit < 9) {
      q.push(num * 10 + lastDigit + 1);
    }
  }

  return ans;
};