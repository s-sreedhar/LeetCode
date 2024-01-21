func findLongestChain(pairs [][]int) int {
    n := len(pairs)
    sort.Slice(pairs, func(i, j int) bool { return pairs[i][1] < pairs[j][1] }) // Sort by ending values

    ans := 1  // Initialize with at least one pair
    prevEnd := pairs[0][1]  // Track ending value of the first pair

    for i := 1; i < n; i++ {  // Start from the second pair
        if pairs[i][0] > prevEnd {  // If current pair doesn't overlap
            ans++
            prevEnd = pairs[i][1]
        }
    }

    return ans
}
