const express = require("express")
const app = express()
const port = 3000


//Home Route
app.get('/', (req, res) => {
  res.end("Routing App")
})




app.listen(port, () => {
  console.log("Server listening on 3000");
})