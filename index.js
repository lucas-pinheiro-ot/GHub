const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(express.static('public/style'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login/index.html');
});  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});