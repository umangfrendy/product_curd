const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const cors =require('cors')

// Configure dotenv
dotenv.config()

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
// Routes
app.use("/product", require("./routes/productRoutes"));
app.use("/category", require("./routes/categoryRoutes"));


// Connection with database
const URL = process.env.MONGODB_URL;
mongoose.connect(
  URL,
  (err) => {
    if (err) throw err;
    console.log("Connected To MongoDB");
  }
);

// Listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
