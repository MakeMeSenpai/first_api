// import 'dotenv/config';
import uuidv4 from 'uuid/v4';
import express from 'express';

const express = require('express');
const app = express();
const port = 3000

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  

app.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
});
app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
      id,
      text: req.body.text,
    };
    messages[id] = message;
    return res.send(message);
  });
app.put('/users/:userId', (req, res) => {
    return res.send(`PUT HTTP method on user/${req.params.userId} resource`,);
});
app.delete('/users/:userId', (req, res) => {
    return res.send(`DELETE HTTP method on user/${req.params.userId} resource`,);
});

let users = {
    1: {
      id: '1',
      username: 'Robin Wieruch',
    },
    2: {
      id: '2',
      username: 'Dave Davids',
    },
  };

let messages = {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'By World',
        userId: '2',
    },
};

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
});
app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
});

app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
});
app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
