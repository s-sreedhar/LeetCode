function camelMatch(queries: string[], pattern: string): boolean[] {
    const ans: boolean[] = [];
    for (const query of queries) {
        ans.push(isMatch(query, pattern));
    }
    return ans;
}

function isMatch(query: string, pattern: string): boolean {
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