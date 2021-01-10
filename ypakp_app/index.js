const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/'));

app.get('/index.*', (req, res) => {
  res.sendFile(__dirname+'/index.html');

})

app.get('/login.html', (req, res) => {
  res.sendFile(__dirname+'/public/login.html');
})

app.get('/Register.html', (req, res) => {
  res.sendFile(__dirname+'/public/Register.html');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
