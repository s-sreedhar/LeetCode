func binaryGap(n int) int {
	var ans int

	for d := -32; n > 0; n >>= 1 {
		if n%2 == 1 {
			ans = max(ans, d)
			d = 0
		}
		d++
	}

	return ans
}