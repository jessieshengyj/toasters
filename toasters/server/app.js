const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./src/config');

const userInfoRoute = require('./src/routes/UserInfo');
const toastRoute = require('./src/routes/toast')

connectDB.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: ['http://localhost:3000'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/toast', toastRoute);

app.get('/', (req, res) => {
  res.send('Server connection established!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});