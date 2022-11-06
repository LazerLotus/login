const express = require('express')
const router = express.Router()
const Users = require('../../models/users')
const Session = require('../../models/sessions')

router.get('/', (req, res) => {
  const sessionID = req.signedCookies.sessionID
  //if there is no session ID, return to login page
  if (!sessionID) {
    return res.redirect('/')
  }
  Session.findOne({ sessionID })
    .then(data => {
      if (data) {
        //render user name in welcom page if this session exists
        const usermail = data.userEmail
        Users.findOne({ email: usermail })
          .then((user) => {
            return res.render('welcome', { username: user.firstName })
          })
          .catch((error) => {
            console.error(error)
            return res.render('login', { invalid: "invalid" })
          })
      } else {
        // return to login page when no this email
        return res.redirect('/')
      }

    })
    .catch((error) => {
      console.error(error)
      return res.render('login', { invalid: "invalid" })
    })
})


module.exports = router