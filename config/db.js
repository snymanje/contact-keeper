const mongoose = require("mongoose");
const config = require("config");
const e = require("express");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose
      .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to DB");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
