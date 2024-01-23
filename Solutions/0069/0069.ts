function mySqrt(x: number): number {
     let l: number = 1;
    let r: number = x + 1;

    while (l < r) {
        const m: number = Math.floor((l + r) / 2);
        if (m > x / m) {
            r = m;
        } else {
            l = m + 1;
        }
    }

    return l - 1;
};