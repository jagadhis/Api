const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add a todo"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
