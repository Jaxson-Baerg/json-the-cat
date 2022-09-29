import chalk from "chalk";
import {pullBreed} from "./pullBreed.js";

const args = process.argv.slice(2);

const main = async () => {
  return await pullBreed(args);
};

main()
  .then((body) => {
    const bodyObj = JSON.parse(body);
    //console.log(bodyObj);
    console.log(`Success:\nBreed Name: ${chalk.green(bodyObj[0].name)}\nBreed Description: ${chalk.yellow(bodyObj[0].description)}`);
  })
  .catch((error) => {
    console.log(`Failed:\n${chalk.red(error)}`);
  });