const express = require('express')
const router = express.Router()
const Users = require('../../models/users')
const Session = require('../../models/sessions')
const sessionIDgenerater = require('../../utilities/sessionIDGenerater')


router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  const usermail = req.body.email
  const password = req.body.password
  const userIP = req.ip.toString() //to generate session id 

  Users.findOne({ email: usermail })
    .then(user => {
      if (user.password === password) {
        const sessionID = sessionIDgenerater(usermail, userIP)


        res.render('welcome', { username: user.firstName })
        // When password is matched with user email, redirect to welcome page
        res.cookie('sessionID', sessionID, { signed: true })
        //put sessionID in user cookie
        return Session.create({ sessionID: sessionID, userEmail: usermail })
        //When password is matched with user email, store session id to mongoDB
      } else {
        return res.render('login', { invalid: "invalid" })
      }
    })
    .catch((error) => {
      console.error(error)
      return res.render('login', { invalid: "invalid" })
    })

})

module.exports = router