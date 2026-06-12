const express = require('express');
const mongoose = require('mongoose');
const UserData = require('./model');

const app = express();




app.listen(3000,()=>console.log('server running.....okay'))