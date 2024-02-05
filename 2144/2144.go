func minimumCost(cost []int) int {
	ans := 0

	sort.Sort(sort.Reverse(sort.IntSlice(cost)))

	for i := 0; i < len(cost); i++ {
		if i%3 != 2 {
			ans += cost[i]
		}
	}

	return ans
}