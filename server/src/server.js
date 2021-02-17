const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://premor:alice@cluster0.nqgek.mongodb.net/omnistack06?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//Midleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

app.listen(3333)