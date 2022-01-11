require("dotenv").config();
require("express-async-errors");

//async errors;
const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const productsRouters = require("./routes/products");
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
//products route
app.use("/api/v1/products", productsRouters);

const port = process.env.Port || 5000;
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
