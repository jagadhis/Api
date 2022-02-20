const asyncHandler = require("express-async-handler");

//@desc get todo
//@route GET/api/greeting/
//@access Private
const gettodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a todo");
  }
  res.status(200).json({ message: "hey Codie" });
});
//@desc Set todo
//@route GET/api/greeting/
//@access Private
const Settodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "hello there" });
});
//@desc Update todo
//@route GET/api/greeting/
//@access Private
const Updatetodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update message ${req.params.id}` });
});
//@desc Delete todo
//@route GET/api/greeting/
//@access Private
const Deletetodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete message ${req.params.id}` });
});

module.exports = {
  gettodo,
  Settodo,
  Updatetodo,
  Deletetodo,
};
