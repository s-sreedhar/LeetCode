
func maxFrequencyElements(nums []int) int {
	const kMax = 100
	count := make([]int, kMax+1) // Initialize count array with zeros
	var ans int

	for _, num := range nums {
		count[num]++
	}

	maxFreq := 0
	for _, freq := range count {
		if freq > maxFreq {
			maxFreq = freq
		}
	}

	for _, freq := range count {
		if freq == maxFreq {
			ans += maxFreq
		}
	}

	return ans
}