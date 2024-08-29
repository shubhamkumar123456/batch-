const express = require('express')
const app = express();
const port = 8080;
const connectToDB = require('./db')
connectToDB();

// all routes files
let userRoutes = require('./routes/userRoutes')

app.use(express.json()) 
app.get('/', (req, res) => {
    res.send('welcome page')
})

app.use('/users',userRoutes)





app.listen(port, () => {
    console.log('server is running on port ' + port)
})