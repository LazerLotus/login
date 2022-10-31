const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = 3000
const exphbs = require('express-handlebars')

app.use(routes)
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})