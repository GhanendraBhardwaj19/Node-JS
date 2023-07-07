import chalk from "chalk";
import validator from "validator";

console.log(chalk.blue.underline.inverse("Hello , World !"));
const res = validator.isEmail("ghanendra@34.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
