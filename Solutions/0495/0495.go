func findPoisonedDuration(timeSeries []int, duration int) int {
	if duration == 0 {
		return 0
	}

	ans := 0

	for i := 0; i+1 < len(timeSeries); i++ {
		ans += min(timeSeries[i+1]-timeSeries[i], duration)
	}

	return ans + duration
}