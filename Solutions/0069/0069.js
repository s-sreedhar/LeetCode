var mySqrt = function(x) {
    let l = 1;
    let r = x + 1;

    while (l < r) {
        const m = Math.floor((l + r) / 2);
        if (m > x / m) {
            r = m;
        } else {
            l = m + 1;
        }
    }

    return l - 1;
};