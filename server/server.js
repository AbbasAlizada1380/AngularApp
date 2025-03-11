require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const userRouter = require("./rout/listRouter");
const listRouter = require("./rout/listRouter");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});
//user rout
app.get("/users", userRouter);
//list router for list-related routes
app.use("/lists", listRouter);

// Sync Database
sequelize.sync().then(() => {
  console.log("Database connected");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
