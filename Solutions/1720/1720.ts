function decode(encoded: number[], first: number): number[] {
    const ans: number[] = [first];

    for (const e of encoded) {
      ans.push(e ^ ans[ans.length - 1]);
    }

    return ans;
};