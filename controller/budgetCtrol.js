const Income = require("../model/incomeModel");

const Expense = require("../model/expenseM");

module.exports.budget = async (req, res) => {
  try {
    // console.log(req.cookies.user)
    let incomeData = await Income.find({ userId: req.cookies.user._id });

    let expenseData = await Expense.find({ userId: req.cookies.user._id });
    var LabelNames = [];
    var PriceValue = [];
    var TotalExpense = 0;
    expenseData.map((v, i) => {
      TotalExpense = TotalExpense + parseInt(v.price);

      LabelNames.push(v.title);
      PriceValue.push(v.price);
    });

    if (req.cookies.user) {
      return res.render("budget", {
        incomeData: incomeData[0],
        expenseData,
        TotalExpense,
        LabelNames,
        PriceValue,
      });
    }
  } catch {
    console.log("something is wrong");
    return res.redirect("back");
  }
};

module.exports.userIncome = async (req, res) => {
  try {
    // console.log(req.body)
    req.body.userId = req.cookies.user._id;
    let addIncome = await Income.create(req.body);
    if (addIncome) {
      console.log("income add successfully");
      return res.redirect("back");
    }
  } catch {
    console.log("something is wrong");
    return res.redirect("back");
  }
};

module.exports.userExpense = async (req, res) => {
  try {
    req.body.userId = req.cookies.user._id;

    let addExpense = await Expense.create(req.body);
    if (addExpense) {
      console.log("expense data add successfully");
      return res.redirect("back");
    }
  } catch {
    console.log("something is wrong");
    return res.redirect("back");
  }
};

module.exports.deleteData = async (req, res) => {
  try {
    let deleteExpense = await Expense.findByIdAndDelete(req.params.id);
    if (deleteExpense) {
      console.log("data delete");
      return res.redirect("back");
    }
  } catch {
    console.log("something is wrong");
    return res.redirect("back");
  }
};

module.exports.updateData = async (req, res) => {
  try {
    let updateExpense = await Expense.findById(req.query.expId);
    return res.render("edit", {
      updateExpense,
    });
  } catch {
    console.log("something is wrong");
    return res.redirect("back");
  }
};

module.exports.editExpense = async (req, res) => {
  try {
    let editExpenseData = await Expense.findByIdAndUpdate(req.body.eid,req.body);
    if (editExpenseData) {
      console.log("data update");
      return res.redirect("/budget");
    }
  } catch {
    console.log("something is wrong");
    return res.redirect("back");
  }
};
