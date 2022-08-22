const routes = require("./routes/routes");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

//Middleware
app.use(cors());
app.use(express.json());

require("dotenv").config();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

app.use("/api", routes);
