const express = require('express');
const userRoutes = require('./routes/userRoutes')

const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(express.static('public'));

app.use('/', userRoutes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});