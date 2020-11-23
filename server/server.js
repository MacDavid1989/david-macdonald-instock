const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT

app.use(express.json());

app.use(cors());

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`);
    console.log('Press CTRL + C to stop server');
})