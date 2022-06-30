const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const bodyparser = require("body-parser")
const path = require("path")
const connectDB = require('./server/database/connection')


const app = express()
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080


// Log Requests 
app.use(morgan('tiny'))
connectDB()

// MongoDB Connection


// Parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))


// Set View Engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views"))


// Load Assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


// Load Routes
app.use("/", require('./server/routes/router'))




app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
})