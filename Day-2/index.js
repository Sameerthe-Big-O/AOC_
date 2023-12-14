const path = require('path');
const fs = require('fs');
const data = require('./input');
//*the elef wil hide the number of cubes of each color

const dat = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');
console.log(dat, typeof dat);
const separatorFunc = (line) => {
  let blue = 0;
  let red = 0;
  let green = 0;
  const separateGame = line.split(':');
  const sets = separateGame[1].split(';');
  const separateCube = sets.map((set) => set.split(','));
  const cube = separateCube
    .map((cubes) =>
      cubes.map((cube) => {
        const array = cube.split(' ');
        array.splice(0, 1);
        return array;
      })
    )
    .flat(1);
  for (const cubeInfo of cube) {
    if (cubeInfo[1].includes('blue')) blue += Number(cubeInfo[0]);
    else if (cubeInfo[1].includes('red')) red += Number(cubeInfo[0]);
    else if (cubeInfo[1].includes('green')) green += Number(cubeInfo[0]);
  }
  console.log(Number(separateGame[0].split(' ')[1]));
  return [Number(separateGame[0].split(' ')[1]), [red, green, blue]];
};

const findPossibleGames = (data) => {
  let result = 0;

  const games = data.split('\n');

  games.map((game) => {
    if (game) {
      const values = separatorFunc(game);
      if (values[1][0] <= 12 && values[1][1] <= 13 && values[1][2] <= 14) {
        console.log(values[1][0], values[1][1], values[1][2]);
        result += values[0];
      }
    }
  });
  return result;
};

console.log('answer', findPossibleGames(data));
