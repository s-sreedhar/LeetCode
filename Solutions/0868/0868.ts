function binaryGap(n: number): number {
    let ans:number = 0;

    for (let d = -32; n; n >>= 1, ++d) {
        if (n % 2 === 1) {
            ans = Math.max(ans, d);
            d = 0;
        }
    }

    return ans;
};