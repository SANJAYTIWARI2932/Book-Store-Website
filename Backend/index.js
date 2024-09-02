const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const bookRoute = require("./route/book.route.js");
const userRoute = require("./route/user.route.js");

const app = express();

// Enable CORS and JSON body parsing middleware
app.use(cors());
app.use(express.json());

// Load environment variables from .env file
dotenv.config();

const PORT = 8080; // Use a different port if needed
const URI = "mongodb://localhost:27017/bookStore"; // Correct case for the database name

// Connect to MongoDB
mongoose.connect(URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Error connecting to MongoDB:", error));

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
