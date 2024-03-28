const express = require('express')
const app = express()
app.use(express.json())
const task_route = require('./routes/task')
app.use('/task',task_route)
app.listen(3300, console.log('listening on port 3000'))

