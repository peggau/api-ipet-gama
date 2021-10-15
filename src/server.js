const dotenv  = require("dotenv");
const express = require('express');
const routes = require('./routes');
const cors = require("cors");

dotenv.config();
require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);