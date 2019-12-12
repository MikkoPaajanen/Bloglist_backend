const mongoose = require('mongoose')

// specifying how data is saved to database
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  url: { type: String, required: true },
  likes: Number
})

// transforming data retreived from database
blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    if (returnedObject.likes === null) {
      returnedObject.likes = 0
    }
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)