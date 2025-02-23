    const express = require('express');
    const routes = express.Router();

    const AuthCtl = require("../controller/AuthController");


    routes.get("/signUp",AuthCtl.signUp);
    routes.post("/insertSignUp",AuthCtl.insertSignUp);
    routes.get("/",AuthCtl.signIn)
    routes.post("/signInData",AuthCtl.signInData)


    routes.use("/budget",require("./budgetTracker"));


    module.exports = routes;