const express = require("express")
const route = express.Router()
const services = require('../services/render')


// @description Root Route 
route.get("/", services.homeRoutes)

// @description Add Users
route.get("/add-user", services.add_user)

// @description Update User
route.get("/update-user", services.update_user)




module.exports = route