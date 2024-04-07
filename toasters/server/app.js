const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kevinwu:0Jtuw4asT1cbA1OG@cluster0.zpjenmv.mongodb.net/")
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});
const toastRoute = require('./src/routes/toast');
const userRoute = require('./src/routes/user');

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/toast', toastRoute);
app.use('/user', userRoute);

app.get('/', (req, res) => {
  res.send('Server connection established!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});