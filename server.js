const express = require('express')
const history = require('express-history-api-fallback')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000 

app.use(express.static(path.resolve('dist')))
app.use(history('index.html', {root: 'dist'}))
app.listen(PORT, () => { 
  console.log('listening on', PORT)
})
