var firstUniqChar = function(s) {
    const count = new Array(256).fill(0); // Expand array size for ASCII characters

  for (const c of s) {
    count[c.charCodeAt(0)]++; // Use charCodeAt for correct indexing
  }

  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i);
    if (count[charIndex] === 1) {
      return i;
    }
  }

  return -1; // No unique characters found
};