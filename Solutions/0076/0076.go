func minWindow(s string, t string) string {
	count := make([]int, 128)
	required := len(t)
	bestLeft := -1
	minLength := len(s) + 1

	for _, c := range t {
		count[c]++
	}

	for l, r := 0, 0; r < len(s); r++ {
		if count[s[r]]--; count[s[r]] >= 0 {
			required--
		}
		for required == 0 {
			if r-l+1 < minLength {
				bestLeft = l
				minLength = r - l + 1
			}
			if count[s[l]]++; count[s[l]] > 0 {
				required++
			}
			l++
		}
	}

	if bestLeft == -1 {
		return ""
	}

	return s[bestLeft : bestLeft+minLength]
}