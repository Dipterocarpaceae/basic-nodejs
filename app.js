// const fs = require('fs');

// fs.copyFileSync("text.txt", "text2.txt");
// console.log("File copied");

// const hero = require("superheroes");

// for(let i = 0; i < 10; i++) {
//     console.log(hero.random());
// }

const op = require("./module");

const moduleTitle = op.title;
const moduleTambah = op.tambah(10, 2);
const moduleKali = op.kali(10, 2);

console.log(moduleTitle);
console.log(moduleTambah);
console.log(moduleKali);