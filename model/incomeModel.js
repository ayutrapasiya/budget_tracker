const mongoose = require("mongoose");

const incomeSchema = mongoose.Schema({
  income: {
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

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income