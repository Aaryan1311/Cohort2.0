const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aaryan:iTk7JE8Hv2Z6eM5v@cluster0.tzhantu.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}