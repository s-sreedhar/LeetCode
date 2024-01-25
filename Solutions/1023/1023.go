func camelMatch(queries []string, pattern string) []bool {
	var ans []bool
	for _, query := range queries {
		ans = append(ans, isMatch(query, pattern))
	}
	return ans
}

func isMatch(query string, pattern string) bool {
	j := 0
	for _, c := range query {
		if j < len(pattern) && byte(c) == pattern[j] {
			j++
		} else if unicode.IsUpper(c) {
			return false
		}
	}
	return j == len(pattern)
}