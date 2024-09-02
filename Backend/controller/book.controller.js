const Book = require("../model/book.model.js");

const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        console.log(book);
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

module.exports = { getBook };
