import request from "request";

export const pullBreed = (str) => {
  return new Promise((resolve, reject) => {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${str}`, (error, response, body) => {
      if (error || body === "[]") reject("Breed name unavailable.");
      const bodyObj = JSON.parse(body);
      resolve(bodyObj);
    });
  });
}