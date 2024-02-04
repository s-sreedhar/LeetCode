function minWindow(s: string, t: string): string {
    const count: number[] = new Array(128).fill(0);
  let required: number = t.length;
  let bestLeft: number = -1;
  let minLength: number = s.length + 1;

  for (const c of t) {
    ++count[c.charCodeAt(0)];
  }

  for (let l = 0, r = 0; r < s.length; ++r) {
    if (--count[s.charCodeAt(r)] >= 0) {
      --required;
    }
    while (required === 0) {
      if (r - l + 1 < minLength) {
        bestLeft = l;
        minLength = r - l + 1;
      }
      if (++count[s.charCodeAt(l++)] > 0) {
        ++required;
      }
    }
  }

  return bestLeft === -1 ? "" : s.substring(bestLeft, bestLeft + minLength);
};