const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
)

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense