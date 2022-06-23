const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')


// Middleware
app.use(express.json())


// Routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})
app.use('/api/v1/tasks', tasks)



// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update the task
// app.delete('/api/v1/tasks/:id')  - delete the task


const port = 3000

const start = async () => {
  try {
    await connectDB()
    app.listen(port, console.log(`server is listening on port ${port}...`))
  } catch (error) {
    console.log(error);
  }
}

start()




