let word = "amor"

let wordSplit = word.split("")
let wordReverse = ""

for (let index = (word.length - 1); index >= 0; index--) {
  wordReverse += wordSplit[index]
}

console.log(wordReverse)