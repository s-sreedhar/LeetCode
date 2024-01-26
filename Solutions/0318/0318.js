var maxProduct = function(words) {
    let ans = 0;

    const getMask = (word) => {
      let mask = 0;
      for (const c of word) {
        mask |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
      }
      return mask;
    };

    const masks = words.map(getMask);

    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < i; j++) {
        if (!(masks[i] & masks[j])) {
          ans = Math.max(ans, words[i].length * words[j].length);
        }
      }
    }

    return ans;
};