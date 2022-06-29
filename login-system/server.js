const express = require('express')
const path = require("path")
const bodyparser = require("body-parser")
const session = require("express-session")
const{ v4:uuidv4 } = require("uuid")
const router = require('./router')
const app = express()




app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true
}))


app.set("view engine", 'ejs')


// Load Static Assets
app.use("/static", express.static(path.join(__dirname, "public")))
app.use("/assets", express.static(path.join(__dirname, "public/assets")))


app.use("/route", router)


// Home Route
app.get("/", (req, res) => {
  res.render('base', {tit: "Login System"})
})


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("Listening to the server on 3000")
})