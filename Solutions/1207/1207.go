func uniqueOccurrences(arr []int) bool {
count := make(map[int]int)
occurrences := make(map[int]bool)

for _, num := range arr {
  count[num]++
}

for _, value := range count {
  if occurrences[value] {
    return false
  }
  occurrences[value] = true
}

return true

}