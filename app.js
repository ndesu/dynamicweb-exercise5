const express = require('express')
const app = express()
const port = 3000

const indexRoute = require('./routes/index')
const createPostRoute = require('./routes/createPost')
const singlePostRoute = require('./routes/singlePost')

app.use('/', indexRoute)
app.use('/create', createPostRoute)
app.use('/post', singlePostRoute)

app.listen(port, () => {
    console.log(`Blog app listening on port ${port}`)
})