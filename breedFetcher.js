import request from "request";
import chalk from "chalk";

const args = process.argv.slice(2);

const pullData = () => {
  return new Promise((resolve, reject) => {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
      if (error || body === "[]") reject("Breed name unavailable.");
      resolve(body);
    });
  });
}

const main = async () => {
  return await pullData();
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