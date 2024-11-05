const express = require('express')
const firebase = require("firebase/app")
const app = express()
const port = 3000

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoJ85rLSFzLX4su89FMf_Lo8T7aJjA0aU",
    authDomain: "dynamicweb-exercise5.firebaseapp.com",
    projectId: "dynamicweb-exercise5",
    storageBucket: "dynamicweb-exercise5.firebasestorage.app",
    messagingSenderId: "772346840033",
    appId: "1:772346840033:web:64fbb4aee21511ecec08a0"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig)

const indexRoute = require('./routes/index')
const createPostRoute = require('./routes/createPost')
const singlePostRoute = require('./routes/singlePost')

app.use('/', indexRoute)
app.use('/create', createPostRoute)
app.use('/post', singlePostRoute)

app.listen(port, () => {
    console.log(`Blog app listening on port ${port}`)
})