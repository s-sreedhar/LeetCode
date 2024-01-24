func singleNumber(nums []int) int {
	var ones, twos int

	for _, num := range nums {
		ones ^= num &^ twos
		twos ^= num &^ ones
	}

	return ones
}