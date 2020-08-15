const findLongestWord = function (string) {
  string = string.split(" ");
  let maxWord = string[0];
  for (const word of string) {
    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }
  return maxWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
