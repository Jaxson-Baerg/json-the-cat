import chalk from "chalk";
import {pullBreed} from "./pullBreed.js";

const args = process.argv.slice(2);

const main = async () => {
  return await pullBreed(args[0]);
};

main()
  .then((body) => {
    console.log(`Success:\nBreed Name: ${chalk.green(body[0].name)}\nBreed Description: ${chalk.yellow(body[0].description)}`);
  })
  .catch((error) => {
    console.log(`Failed:\n${chalk.red(error)}`);
  });