package main

import (
    "fmt"
    "sort"
)

func closeStrings(word1, word2 string) bool {
    if len(word1) != len(word2) {
        return false
    }

    count1 := make(map[rune]int)
    count2 := make(map[rune]int)

    for _, char := range word1 {
        count1[char]++
    }
    for _, char := range word2 {
        count2[char]++
    }

    if len(count1) != len(count2) {
        return false
    }

    var count1Values, count2Values []int
    for _, value := range count1 {
        count1Values = append(count1Values, value)
    }
    for _, value := range count2 {
        count2Values = append(count2Values, value)
