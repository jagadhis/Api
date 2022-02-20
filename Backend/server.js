const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errormiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/greeting", require("./Routes/routes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
