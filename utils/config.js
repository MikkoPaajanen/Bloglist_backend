require('dotenv').config()

// defining where to find address to database and which port to use

let MONGODB_URI = process.env.MONGODB_URI
let PORT = process.env.PORT

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
  MONGODB_URI,
  PORT
}