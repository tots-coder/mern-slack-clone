/**
 * The 2 lines below is another way to include express and dotenv:
 * const express = require('express')
 * const dotenv = require('dotenv')
 *
 * To able to use import keyword for importing express or dotenv package, you have to add a configuration on package.json file, "type": "module"
 */

import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./config/inngest.js";
import { serve } from "inngest/express";

const app = express();

app.use(express.json()); // req.body will be available
app.use(clerkMiddleware()); // req.auth will be available in the request object

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.listen(ENV.PORT, () => {
//   console.log("Server started on port:", ENV.PORT);
//   connectDB();
// });

const startServer = async () => {
  try {
    await connectDB();
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log("Server started on port:", ENV.PORT);
      });
    }
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

startServer();

export default app;
