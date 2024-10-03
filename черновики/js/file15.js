let word = 'Привет';
let newWord = '';

for(let i = 0; i < word.length; i++) {
    newWord = word[i].toLowerCase() + newWord;
}

console.log(newWord);