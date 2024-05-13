package main

func minCost(colors string, neededTime []int) int {
	ans := 0
	maxNeededTime := neededTime[0]
	for i := 1; i < len(colors); i++ {
		if colors[i] == colors[i-1] {
			if maxNeededTime < neededTime[i] {
				ans += maxNeededTime
				maxNeededTime = neededTime[i]
			} else {
				ans += neededTime[i]
			}
		} else {
			maxNeededTime = neededTime[i]
		}
	}
	return ans
}
