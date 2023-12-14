// const numberIdentifier = () => {};

// const elvesProblem = (data) => {
//   const linesArray = data.split('\n');
//   let allNumber = [];

//   linesArray.map((line) => {
//     const characterArray = line.split('');
//     const lastCharacterIndex = characterArray.length - 1;
//     let firstDigit = '';
//     let secondDigit = '';

//     characterArray.map((character, index) => {
//       //*checking if the character is number or not
//       if (!isNaN(character)) {
//         if (!firstDigit) {
//           if (lastCharacterIndex === index) {
//             firstDigit = char;
//             secondDigit = char;
//             allNumber.push(firstDigit + secondDigit);
//             firstDigit = '';
//             secondDigit = '';
//             return;
//           }
//           firstDigit = character;
//           return;
//         }
//         secondDigit = character;
//       }
//       if (lastCharacterIndex === index && secondDigit) {
//         allNumber.push(firstDigit + secondDigit);
//         firstDigit = '';
//         secondDigit = '';
//         return;
//       }
//       if (lastCharacterIndex === index && !secondDigit) {
//         secondDigit = firstDigit;
//         allNumber.push(firstDigit + secondDigit);
//         firstDigit = '';
//         secondDigit = '';
//         return;
//       }
//     });
//   });
//   return allNumber.reduce((sum, current) => sum + Number(current), 0);
// };

//********** Part two **********/

//*if the first and last digit are the digit then those will be the digit character

//*otherwise the seplled out character will be the

const elvesProblem = (data, fn) => {
  const linesArray = data.split('\n');
  let allNumber = [];

  linesArray.map((line) => {
    const characterArray = line.split('');
    const lastCharacterIndex = characterArray.length - 1;

    let firstDigit = '';
    let secondDigit = '';
    let result = '';

    characterArray.map((character, index) => {
      if (!isNaN(character) && !firstDigit && index === 0 && null) {
        firstDigit = character;
      }
      if (!isNaN(character) && !secondDigit && index === lastCharacterIndex) {
        console.log(secondDigit);
        secondDigit = character;
      }
    });
    if (!result && line) {
      result = returnNumber(line, firstDigit, secondDigit);
    }
    allNumber.push(result);
  });
  return allNumber.reduce((sum, current) => sum + Number(current), 0);
};

const returnNumber = (word, firstDigit, secondDigit) => {
  const number = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const num = [1, 2, 4, 5, 6, 7, 8, 9];
  const arrayNum = [];
  let wordsArray = [];
  number.map((stringNumber, i) => {
    if (word.includes(stringNumber.toLocaleLowerCase())) {
      wordsArray.push(i);
    }
    console.log('length', arrayNum.length);
    if (arrayNum.length <= 2) {
      if ((i === 0) & word.includes(stringNumber.toLocaleLowerCase())) {
        arrayNum.length === 0
          ? arrayNum.push(1)
          : !(firstDigit || secondDigit)
          ? arrayNum.push(1)
          : null;
      } else if (i === 1 && word.includes(stringNumber.toLocaleLowerCase())) {
        arrayNum.length === 0
          ? arrayNum.push(2)
          : !(firstDigit || secondDigit)
          ? arrayNum.push(2)
          : null;
      } else if (i === 2 && word.includes(stringNumber.toLocaleLowerCase())) {
        arrayNum.length === 0
          ? arrayNum.push(3)
          : !(firstDigit || secondDigit)
          ? arrayNum.push(3)
          : null;
      } else if (i === 3 && word.includes(stringNumber.toLocaleLowerCase())) {
        arrayNum.length === 0
          ? arrayNum.push(4)
          : !(firstDigit || secondDigit)
          ? arrayNum.push(4)
          : null;
      } else if (i === 4 && word.includes(stringNumber.toLocaleLowerCase())) {
        arrayNum.length === 0
          ? arrayNum.push(5)
          : !(firstDigit || secondDigit)
          ? arrayNum.push(5)
          : null;
      } else if (i === 5 && word.includes(stringNumber.toLocaleLowerCase())) {
        arrayNum.length === 0
          ? arrayNum.push(6)
          : !(firstDigit || secondDigit)
          ? arrayNum.push(6)
          : null;
      } else if (i === 6 && word.includes(stringNumber.toLocaleLowerCase())) {
        arrayNum.length === 0
          ? arrayNum.push(7)
          : !(firstDigit || secondDigit)
          ? arrayNum.push(7)
          : null;
      } else if (i === 7 && word.includes(stringNumber.toLocaleLowerCase())) {
        arrayNum.length === 0
          ? arrayNum.push(8)
          : !(firstDigit || secondDigit)
          ? arrayNum.push(8)
          : null;
      } else if (i === 8 && word.includes(stringNumber.toLocaleLowerCase())) {
        arrayNum.length === 0
          ? arrayNum.push(9)
          : !(firstDigit || secondDigit)
          ? arrayNum.push(9)
          : null;
      }
    }
  });

  if (arrayNum.length < 2 && !firstDigit && !secondDigit) {
    arrayNum.push(arrayNum[0]);
  }
  if (firstDigit) {
    return arrayNum.reduce((acc, cur) => acc + cur, firstDigit);
  }
  if (firstDigit && secondDigit) {
    const fs = [];
    fs[0] = firstDigit;
    fs[1] = secondDigit;
    return fs.reduce((acc, cur) => acc + cur, 0);
  }
  if (secondDigit) {
    return arrayNum.reduce((acc, cur) => acc + cur, secondDigit);
  }
  if (wordsArray.length > 2) {
    const numberCorres = wordsArray.map((i) => num[i]);
    return numberCorres.reduce((acc, cur) => acc + cur, 0);
  }
  return arrayNum.reduce((acc, cur) => acc + cur, 0);
};
