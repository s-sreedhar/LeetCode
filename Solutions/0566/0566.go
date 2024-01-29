func matrixReshape(nums [][]int, r int, c int) [][]int {
	if len(nums) == 0 || r*c != len(nums)*len(nums[0]) {
		return nums
	}

	ans := make([][]int, r)
	for i := range ans {
		ans[i] = make([]int, c)
	}

	k := 0
	for i := 0; i < len(nums); i++ {
		for j := 0; j < len(nums[0]); j++ {
			ans[k/c][k%c] = nums[i][j]
			k++
		}
	}

	return ans

}