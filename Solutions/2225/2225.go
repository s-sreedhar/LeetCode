func findWinners(matches [][]int) [][]int {
    ans := make([][]int, 2)
    lossesCount := make(map[int]int)

    for _, match := range matches {
        winner, loser := match[0], match[1]
        lossesCount[loser]++
        if _, ok := lossesCount[winner]; !ok {
            lossesCount[winner] = 0
        }
    }

    for player, nLosses := range lossesCount {
        if nLosses < 2 {
            ans[nLosses] = append(ans[nLosses], player)
        }
    }

    sort.Ints(ans[0])
    sort.Ints(ans[1])
    return ans
}
