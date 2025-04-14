const express = require('express')

const authorization = require('./routes/authorization')
const categoriesRouter = require('./routes/categories')
const userRouter = require('./routes/user')

//creating the express object
const app = express()


// app.use(express.static('images'))
app.use(express.json())
app.use('/categories', categoriesRouter)
app.use('/user', userRouter)


app.listen(4000, 'localhost', () => {
    console.log('server started at port 4000')
})
