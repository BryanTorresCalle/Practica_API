const express = require("express");
const app = express();

let cors = require("cors");
app.use(cors());

app.use(express.json());

const router = express.Router();
const route = require("./endpoints");
app.use(route);

const port = 3000;

app.listen(port, () => {  console.log(`Listen to http://localhost:${port}`) });





