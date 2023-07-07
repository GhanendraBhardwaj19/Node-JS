const path = require("path");

console.log(path.dirname("C:/Web Design/Node JS Tutorial/pathmodule/path.js"));
console.log(path.extname("C:/Web Design/Node JS Tutorial/pathmodule/path.js"));
console.log(path.basename("C:/Web Design/Node JS Tutorial/pathmodule/path.js"));

console.log(path.parse("C:/Web Design/Node JS Tutorial/pathmodule/path.js"));
console.log(
  path.parse("C:/Web Design/Node JS Tutorial/pathmodule/path.js").name
);
