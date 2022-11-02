const express = require('express')
const router = express.Router()
const users1 = require('../../models/users')
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]




router.get('/', (req, res) => {
  res.render('home')
})

router.post('/', (req, res) => {
  const usermail = req.body.email
  const password = req.body.password
  const user = users.filter((user) => user.email === usermail)
  if (user.length !== 0) {
    if (user[0].password === password) {
      return res.render('welcome', { username: user[0].firstName })
    } else {
      return res.render('home', { invalid: "invalid" })
    }
  }
  else {
    return res.render('home', { invalid: "invalid" })
  }


})

module.exports = router