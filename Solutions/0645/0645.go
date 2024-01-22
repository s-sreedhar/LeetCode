func findErrorNums(nums []int) []int {
	duplicate := 0
  
	for _, num := range nums {
	  absNum := abs(num)
	  if nums[absNum-1] < 0 {
		duplicate = absNum
	  } else {
		nums[absNum-1] *= -1
	  }
	}
  
	for i := range nums {
	  if nums[i] > 0 {
		return []int{duplicate, i + 1}
	  }
	}
  
	return nil
  }
  
  func abs(x int) int {
	if x < 0 {
	  return -x
	}
	return x
  }
  