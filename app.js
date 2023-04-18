require("dotenv").config();
require("events").EventEmitter.defaultMaxListeners = 100;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 8000;
const app = express();
const http = require("http").Server(app);

try {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to database");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});