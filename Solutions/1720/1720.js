var decode = function(encoded, first) {
    const ans = [first];

    for (const e of encoded) {
      ans.push(e ^ ans[ans.length - 1]);
    }

    return ans;

};