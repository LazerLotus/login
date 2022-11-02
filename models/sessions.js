const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sessionSchema = new Schema({
  sessionID: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('session', sessionSchema)