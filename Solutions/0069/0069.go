func mySqrt(x int) int {
	l := 1
	r := x + 1

	for l < r {
		m := (l + r) / 2
		if m > x/m {
			r = m
		} else {
			l = m + 1
		}
	}

	return l - 1
}