const fs = require("fs");

const bioData = {
  name: "Ghanendra",
  age: "20",
  channel: "Ghanendra Bhardwaj",
};

// console.log(bioData.age);
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const obData = JSON.parse(jsonData);
// console.log(obData);

// taks to done

// 1 convert to json
// 2. add in second file
// 3.read file
// 4. convert back to the obj
// 5. show on console

const jsonData = JSON.stringify(bioData);

// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("done!");
// });

fs.readFile("json1.json", "utf8", (err, data) => {
  console.log(data);

  const obData = JSON.parse(data);
  console.log(obData);
});
