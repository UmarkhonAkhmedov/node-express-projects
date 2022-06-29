var express = require("express")
var router = express.Router()


const creadential = {
  email: "admin@gmail.com",
  password: "admin123"
}
// Login User
router.post("/login", (req, res) => {
  if(req.body.email == creadential.email && req.body.password == creadential.password){
    req.session.user = req.body.email
    res.redirect('/route/dashboard')
    // res.end("Login Successful")
  }else{
    res.end("Invalid Username")
  }
})

// Route for dashboard
router.get('/dashboard', (req, res) => {
  if(req.session.user){
    res.render('dashboard', {user:req.session.user})
  }else{
    res.send("Unauthorize User")
  }
})

// Route for logout
router.get('/logout', (req, res) => {
  req.session.destroy(function(err){
    if(err){
      console.log(err);
      res.send("Error")
    }else {
      res.render('base', {title: "Express", logout: "logout Successfully...!"})
    }
  })
})

module.exports = router