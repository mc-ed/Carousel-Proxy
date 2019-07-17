const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

const PORT = 3050;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors());

app.use(express.static("dist"));

app.listen(PORT, () => {'the proxy is up my friend'});