const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors());

app.use('/users',require('./routes/UserRoutes'));
app.use('/files',require('./routes/FilesRoute'));


module.exports = app;