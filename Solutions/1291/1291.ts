function sequentialDigits(low: number, high: number): number[] {
    let ans: number[] = [];
  let q: number[] = Array.from({ length: 9 }, (_, i) => i + 1);

  while (q.length > 0) {
    let num: number = q.shift()!;
    if (num > high) {
      return ans;
    }
    if (low <= num && num <= high) {
      ans.push(num);
    }
    let lastDigit: number = num % 10;
    if (lastDigit < 9) {
      q.push(num * 10 + lastDigit + 1);
    }
  }