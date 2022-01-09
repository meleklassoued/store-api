require("dotenv").config();

//async errors;
const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send(
    '<h1>store Api </h1> <a href="/api/v1/products">¨Products routes</a>',
  );
});

const port = process.env.Port || 5000;
//products route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

async function start() {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listenning port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}
start();
