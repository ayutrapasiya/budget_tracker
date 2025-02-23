const express = require("express");

const routes = express.Router();

const budgetCtl = require("../controller/budgetCtrol");

routes.get("/", budgetCtl.budget);

routes.post("/userIncome", budgetCtl.userIncome);

routes.post("/userExpense", budgetCtl.userExpense);

routes.get("/deleteData/:id",budgetCtl.deleteData);

routes.get("/updateData",budgetCtl.updateData);



routes.post("/editExpense",budgetCtl.editExpense);


module.exports = routes;