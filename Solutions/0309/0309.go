func maxProfit(prices []int) int {
	sell := 0
	hold := math.MinInt64
	prev := 0

	for _, price := range prices {
		cache := sell
		sell = max(sell, hold+price)
		hold = max(hold, prev-price)
		prev = cache
	}

	return sell
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}