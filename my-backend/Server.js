const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./Models/User');

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.post('/items', async (req, res) => {
    try {
      const item = new User(req.body);
      await item.save();
      res.status(201).send(item);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Get all items
  app.get('/items', async (req, res) => {
    try {
      const items = await User.find();
      res.send(items);
    } catch (error) {
      res.status(500).send(error);
    }
  });

app.get('/items', async (req, res) => {
  const items = await User.find();
  res.send(items);
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
