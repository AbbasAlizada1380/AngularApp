// server/routes/userRouter.js
const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

// Create a new user
userRouter.post("/create", userController.createUser);

// Get all users
userRouter.get("/", userController.getAllUsers);

// Get a user by ID
userRouter.get("/:id", userController.getUserById);

// Update a user by ID
userRouter.put("/:id", userController.updateUser);

// Delete a user by ID
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
