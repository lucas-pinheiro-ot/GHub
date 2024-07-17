const path = require('path');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const userRoutes = require('./routes/userRoutes')

const port = 3000;
const app = express();
const server = http.createServer(app)
const io = socketIo(server)

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use('/', userRoutes);

io.on('connection', socket => {
  console.log('New WS Connection...');
  socket.emit('message', 'alguma coisa entrou');
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});