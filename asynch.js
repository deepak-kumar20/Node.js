const fs = require("fs");
fs.readFile("./files/start.txt", 'utf-8', (err, data1) => {
    console.log(data1);
    fs.readFile(`./files/${data1}.txt`, 'utf-8', (err2, data2) => {
        console.log(data2);
        fs.readFile('./files/append.txt', 'utf-8', (err3, data3) => {
            console.log(data3);
            fs.writeFile('./files/output.txt', `${data2}\n${data3}\n\n ${new Date()}`, () => {
                console.log('writing the files..');
            })
        });
    });
});
console.log("reading file....")
