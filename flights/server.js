const express = require("express");
const axios = require("axios");
const app = express();
const port = 8000;
const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.get("/flights", (req, res) => {
  const options = {
    url: `${process.env.URL}?page-size=8`,
    headers: {
      accept: "application/json",
      "X-Cassandra-Token": process.env.TOKEN,
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
