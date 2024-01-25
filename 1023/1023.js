function camelMatch(queries, pattern) {
    const ans = [];
    for (const query of queries) {
        ans.push(isMatch(query, pattern));
    }
    return ans;
}

function isMatch(query, pattern) {
    let j = 0;
    for (const c of query) {
        if (j < pattern.length && c === pattern[j]) {
            ++j;
        } else if (c.toUpperCase() === c) {
            return false;
        }
    }
    return j === pattern.length;
}