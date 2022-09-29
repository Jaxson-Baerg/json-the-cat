import request from "request";

export const pullBreed = (args) => {
  return new Promise((resolve, reject) => {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
      if (error || body === "[]") reject("Breed name unavailable.");
      resolve(body);
    });
  });
}