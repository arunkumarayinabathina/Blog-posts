const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Routes = require('./routes/routes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/posts",Routes)
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("server running on http://localhost:5000");
})