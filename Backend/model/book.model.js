const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    id: Number,  
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
