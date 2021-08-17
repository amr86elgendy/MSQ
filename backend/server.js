const express =require('express');
const dotenv = require('dotenv');
const connectDb = require('./db.js');

const app = express();

const { getAllQues } = require('./controller')

dotenv.config()
connectDb()

app.use(express.json());
app.get('/api/questions', getAllQues)


const port = process.env.PORT || 5000
app.listen(port, console.log(`server running on port ${port}`))