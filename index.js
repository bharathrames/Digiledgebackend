const express = require('express');
const cors = require('cors');
const connectDB = require('./mongoose');
const routes = require('./routes');

require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB(); 

app.use('/api', routes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
