const fs = require("fs");
let textIn = fs.readFileSync("./files/input.txt", 'utf-8');
console.log(textIn);
let content = `the read text is :${textIn} .\n Date created: ${new Date()}`
fs.writeFileSync("./files/output.txt", content);