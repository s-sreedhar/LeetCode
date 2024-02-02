func sequentialDigits(low int, high int) []int {
	ans := []int{}
	q := make([]int, 0, 9)
	for i := 1; i <= 9; i++ {
		q = append(q, i)
	}

	for len(q) > 0 {
		num := q[0]
		q = q[1:]

		if num > high {
			return ans
		}
		if low <= num && num <= high {
			ans = append(ans, num)
		}

		lastDigit := num % 10
		if lastDigit < 9 {
			q = append(q, num*10+lastDigit+1)
		}
	}

	return ans
}