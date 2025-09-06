/**
 * The 2 lines below is another way to include express and dotenv:
 * const express = require('express')
 * const dotenv = require('dotenv')
 *
 * To able to use import keyword for importing express or dotenv package, you have to add a configuration on package.json file, "type": "module"
 */

import express from "express";
import { ENV } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("mongo uri:", ENV.MONGO_URI);

app.listen(ENV.PORT, () => console.log("Server started on port:", ENV.PORT));
