const elvesProblem = (data) => {
  const linesArray = data.split('\n');
  let allNumber = [];
  linesArray.map((line) => {
    const characterArray = line.split('');
    const lastCharacterIndex = characterArray.length - 1;
    let firstDigit = '';
    let secondDigit = '';
    characterArray.map((character, index) => {
      if (!isNaN(character)) {
        if (!firstDigit) {
          firstDigit = character;
          return;
        }
        secondDigit = character;
      }
      if (lastCharacterIndex === index && secondDigit) {
        allNumber.push(firstDigit + secondDigit);
        firstDigit = '';
        secondDigit = '';
        return;
      }
      if (lastCharacterIndex === index && !secondDigit) {
        secondDigit = firstDigit;
        allNumber.push(firstDigit + secondDigit);
        firstDigit = '';
        secondDigit = '';
        return;
      }
    });
  });
  return allNumber.reduce((sum, current) => sum + Number(current), 0);
};
