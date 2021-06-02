const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


app.get('/', (req, res) => {
    res.send('This is the Asset Manager API');
  });

  const connect = async () => {
    try {
        await mongoose.connect(process.env.DB, {
          useNewUrlParser: true, 
          useUnifiedTopology: true
        });
        const conn = mongoose.connection;
        console.log(`Connected to the ${conn.name} data`);
      } catch (error) {
        console.log('Error on db Connection - Code:', error.code);
      }
  };

  connect();

  

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});