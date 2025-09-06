import "dotenv/config"; // will also work if imported 'from "dotenv"' then call dotenv.config()

export const ENV = {
  PORT: process.env.PORT || 5001,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
};
