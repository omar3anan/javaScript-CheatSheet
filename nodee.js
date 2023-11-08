const express = require("express");
const app = express();
const axios = require("axios");

async function allPlayers() {
  const response = await axios.get("https://www.natours.dev/api/v1/tours");
  return response.data; //, response.data why we put .data here? because we want to get the data from the response
}
async function postPlayer() {
  const response = await axios.post("https://www.natours.dev/api/v1/tours", {
    name: "The Forest Hiker",
    duration: 5,
    maxGroupSize: 25,
    difficulty: "easy",
    ratingsAverage: 4.7,
    ratingsQuantity: 37,
    price: 397,
  });
  return response.data;
}
allPlayers()
  .then((responsex) => {
    if (responsex.status === "success")
      console.log(responsex.data.data[0].startLocation);
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => console.log("Server is running"));
