const wordSearch = (letters, word) => { 
  if (!word) {
      throw new Error('Error. No word found.')
  }
  const transposedLetters = letters[0].map((_, columnIndex) => letters.map(row => row[columnIndex]));
  const verticalJoin = transposedLetters.map(el => el.join(''))
  const horizontalJoin = letters.map(ls => ls.join(''))
  console.log(verticalJoin);
  // console.log(horizontalJoin);

  // for (let i = verticalJoin.length - 1; i > 0; i--) {
  //     console.log(verticalJoin[i].join(""));
  //     i++;
  // }



  for (const v of verticalJoin) {
      //each column, search for word
      if (v.includes(word)) return true;
  }

  for (const h of horizontalJoin) {
      //each row, search for word

      if (h.includes(word)) return true;
  }

  return false;
}



wordSearch([
['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK')

module.exports = wordSearch