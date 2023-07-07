const fs = require("fs");

// FOR WRITING IN THE FILES

// fs.writeFileSync("read.txt", "Welcome to my channel..!!");
// fs.writeFileSync("read.txt", "Ghanendra Bhardwaj,Welcome to my channel..!!");
// fs.appendFileSync("read.txt", " This is Ghanendra here!");

// FOR READING FROM THE FILE

// const buf_data = fs.readFileSync("read.txt");
// const og_data = buf_data.toString();
// console.log(og_data);

// FOR RENAME THE FILE

fs.renameSync("read.txt", "readwrite.txt");
