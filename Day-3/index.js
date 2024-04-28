// const ps = require('./input.txt');
const fs = require('fs');
const path = require('path');

const readput = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');
// const rows = readput.split('\n');
const rowss = readput.split('\r\n').map((row) => row.split('.'));
// console.log(rows);
console.log(rowss);
