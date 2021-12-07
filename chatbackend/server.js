const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const dbMessages = require('./dbMessages');
const PORT = process.env.PORT || 9000;
const Messages = require('./dbMessages');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hell This is working');
});
CONNECTION_URL =
  'mongodb+srv://admin:gaurav54321@cluster0.9mvsd.mongodb.net/SpanCock?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, () => {
  console.log('Connected to Database');
});

app.get('/messages/sync', (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post('/messages/new', (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
const server = http.createServer(app);

const io = socketIo(server);

io.on('connection', socket => {
  console.log('New Connection');

  socket.on('joined', () => {
    console.log('User Joined');
  });

  socket.on('message', ({message, id}) => {
    io.emit('sendMessage', {message, id});
    console.log(message, id);
  });

  socket.on('welcome', () => {
    console.log('welcome to the chat');
  });
  socket.on('forceDisconnect', () => {
    // socket.disconnect();
    console.log('Disconnected Successfully');
  });
});

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
