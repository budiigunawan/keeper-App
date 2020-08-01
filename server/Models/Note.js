const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title must be filled"]
    },
    content: {
        type: String,
        required: [true, "Content must be filled"]
    }
})

const Note = mongoose.model("Note",noteSchema)

module.exports = Note;