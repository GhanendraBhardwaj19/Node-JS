const fs = require("fs");

// fs.writeFile("reads.txt", "Hii, this is Ghanendra..!", (err) => {
//   console.log("This is Ghanendra here..");
//   console.log(err);
// });

// fs.appendFile("reads.txt", "data added", (err) => {
//   console.log("Data added!");
// });

fs.readFile("reads.txt", "utf8", (err, data) => {
  console.log(data);
});
