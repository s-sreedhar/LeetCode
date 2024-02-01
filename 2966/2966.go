func divideArray(nums []int, k int) [][]int {
	sort.Ints(nums)
	ans := make([][]int, len(nums)/3)

	for i, j := 2, 0; i < len(nums); i += 3 {
		if nums[i]-nums[i-2] > k {
			return [][]int{}
		}
		ans[j] = []int{nums[i-2], nums[i-1], nums[i]}
		j++
	}

	return ans
}