const fs = require("fs");
const filePath = "./sowpods.txt";

//Number 1
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let uList = [];
  let wordsArray = data.split("\n");
  wordsArray.forEach((word) => {
    if (word.includes("UU")) {
      uList.push(word);
    }
  });
  console.log(uList);
});

//Number 2
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  let xyzlist = [];
  xyzlist = wordList.filter((word) => {
    return word.includes("X") && word.includes("Y") && word.includes("Z");
  });
  console.log(xyzlist);
});

//Number 3
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  let qNotU = [];
  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i];
    if (word.includes("Q") && !word.includes("U")) {
      qNotU.push(word);
    }
  }
  console.log(qNotU);
});

//Number 4
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  let newList = wordList.filter((word) => {
    return word.includes("CAT") && word.length == 5;
  });
  console.log(newList);
});
//Number 5
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  let newList = wordList.filter((word) => {
    return !word.includes("E") && !word.includes("A") && word.length >= 15;
  });
  console.log(newList);
});
//Number 6
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  let newList = [];
  for (let i = 0; i < wordList.length; i++) {
    if (
      wordList[i].includes("B") &&
      wordList[i].includes("X") &&
      wordList[i].length < 5
    ) {
      newList.push(wordList[i]);
    }
  }
  console.log(newList);
});
//Number 7
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  let newList = [];
  wordList.filter((word) => {
    if (word.charAt(0) == "Y" && word.charAt(word.length - 1) == "Y") {
      return newList.push(word);
    }
  });
  console.log(newList);
});
//Number 8 -- this was HARD
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  const vowels = ["A", "E", "I", "O", "U", "Y"];
  let newList = wordList.reduce((accumulator, word) => {
    let hasVowel = false;
    for (letter of word) {
      for (vowel of vowels) {
        if (letter == vowel) {
          hasVowel = true;
          break;
        }
      }
    }
    if (hasVowel == false) {
      accumulator.push(word);
    }
    return accumulator;
  }, []);
  console.log(newList);
});
//Number 9
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  const a = "A";
  const e = "E";
  const i = "I";
  const o = "O";
  const u = "U";
  const y = "Y";
  let newList = [];
  wordList.filter((word) => {
    if (
      word.includes(a) &&
      word.includes(e) &&
      word.includes(i) &&
      word.includes(o) &&
      word.includes(u) &&
      word.includes(y)
    ) {
      return newList.push(word);
    }
  });
  console.log(newList);
});
//Number 10
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  const vowels = ["A", "E", "I", "O", "U", "Y"];
  let newList = [];
  for (word of wordList) {
    let letters = word.split("");
    let container = [];
    for (letter of letters) {
      let upLetter = letter.toUpperCase();
      //gives boolean but that's enough because compared below
      if (vowels.includes(upLetter)) {
        container.push(upLetter);
      }
    }
    if (container.join() == vowels.join()) {
      newList.push(word);
    }
  }
  console.log(newList);
});

// Setting up storage to use during a for loop, including counters and arrays

//Number 1
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  let newlist = wordList.filter((word) => {
    return word.includes("TYPE");
  });
  console.log(newlist);
});
//Number 2
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  let newList = [];
  for (word of wordList) {
    let lastLetters = word.substring(word.length - 5);
    if (lastLetters === "GHTLY") {
      newList.push(word);
    }
  }
  console.log(newList);
});
//Number 3
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  const vowels = ['A','E','I','O','U','Y']
  let hasVowels = []
  for (word of wordList) {
    let letters = word.split('')
    let hasAllVowels = vowels.every((vowel) => letters.includes(vowel));
    if (hasAllVowels == true) {
      hasVowels.push(word);
    }
  }
  let comparisonWord = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  hasVowels.forEach((word) => {
    if (word.length < comparisonWord.length) {
      comparisonWord = word
    }
  })
  console.log(comparisonWord)
})
//Number 4
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  const vowels = ['A','E','I','O','U','Y']
  let hasVowels = []
  for (word of wordList) {
    let letters = word.split('')
    let hasNoVowels = vowels.every((vowel) => !letters.includes(vowel));
    if (hasNoVowels == true) {
      hasVowels.push(word);
    }
  }
  let comparisonWord = ''
  hasVowels.forEach((word) => {
    if (word.length > comparisonWord.length) {
      comparisonWord = word
    }
  })
  console.log(comparisonWord)
})
//Number 5
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  let xCounter = 0
  let zCounter = 0
  let qCounter = 0
  wordList.forEach((word) => {
    if (word.includes('X')) {
      xCounter++
    }
  })
  wordList.forEach((word) => {
    if (word.includes('Z')) {
      zCounter++
    }
  })
  wordList.forEach((word) => {
    if (word.includes('Q')) {
      qCounter++
    }
  })
  console.log(xCounter)
  console.log(zCounter)
  console.log(qCounter)
})
//6
fs.readFile(filePath, "utf8", (err, data) => {
  const wordList = data.split("\n");
  let palindromes = []
  wordList.forEach((word) => {
    let array = word.split('')
    let reversed = array.reverse().join('')
    if (reversed == word) {
      palindromes.push(word)
    }
  })
  biggestDrome = ''
  palindromes.forEach((word) => {
    if (word.length > biggestDrome.length) {
      biggestDrome = word
    }
  })
  
  console.log(biggestDrome)
})

//Number 6
  fs.readFile(filePath, 'utf8', (err, data) => {
    const wordList = data.split('\n');
    const consecutiveLetters = [];
  
    wordList.forEach((word) => {
      for (let i = 1; i < word.length; i++) {
        const prevChar = word[i - 1];
        const char = word[i];
        if (prevChar == char && !consecutiveLetters.includes(prevChar)) {
          consecutiveLetters.push(prevChar);
        }
      }
    });
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphArray = alphabet.split('')
    const nonConsecutiveLetters = alphArray.filter((letter) => !consecutiveLetters.includes(letter));
    console.log(nonConsecutiveLetters);
  });

//Have array to store letters that appear consecutively
//forEach word in the wordList create loop to iterate over each character
//compare the current character to previous character and store in array if thheyr'e the same
//compare array against alphabet and if array doesn't include whatever alphbet character log that char