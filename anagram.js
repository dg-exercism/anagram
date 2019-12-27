//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, list) => {
  const wordTest = word.toLowerCase().split('');
  const letterCount = wordTest.reduce((count, letter) => {
    !count[letter] ? count[letter ] = 1 : count[letter]++; 
    return count
  }, {});
  const letterKeys = Object.keys(letterCount);
  const filteredList = list.filter(item => !item.toLowerCase().split('').every((letter, i) => letter === wordTest[i]));
  return filteredList.filter(item => {
    const first = wordTest.every(letter => item.toLowerCase().match(letter)); 
    const itemLetterCount = item.split('').reduce((count, letter) => {
      const lowerLetter = letter.toLowerCase();
      !count[lowerLetter] ? count[lowerLetter] = 1 : count[lowerLetter]++;
      return count
    }, {});
    const second = letterKeys.every(key => letterCount[key] === itemLetterCount[key]);
    return first && second && item.length === wordTest.length
  })
}
