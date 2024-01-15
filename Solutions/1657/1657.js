function closeStrings(word1, word2) {
  // Check for length equality
  if (word1.length !== word2.length) {
    return false;
  }

  // Create character counters
  const count1 = new Map();
  const count2 = new Map();
  for (const char of word1) {
    count1.set(char, (count1.get(char) || 0) + 1);
  }
  for (const char of word2) {
    count2.set(char, (count2.get(char) || 0) + 1);
  }

  // Compare character sets and counts
  return [...count1.keys()].sort().toString() === [...count2.keys()].sort().toString() &&
         [...count1.values()].sort().toString() === [...count2.values()].sort().toString();
}
