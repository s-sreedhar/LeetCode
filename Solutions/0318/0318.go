func maxProduct(words []string) int {
	ans := 0

	getMask := func(word string) int {
		mask := 0
		for _, c := range word {
			mask |= 1 << (c - 'a')
		}
		return mask
	}

	masks := make([]int, len(words))
	for i, word := range words {
		masks[i] = getMask(word)
	}

	for i := 0; i < len(words); i++ {
		for j := 0; j < i; j++ {
			if masks[i]&masks[j] == 0 {
				ans = max(ans, len(words[i])*len(words[j]))
			}
		}
	}

	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
    