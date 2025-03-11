// server/routes/listRouter.js
const express = require("express");
const listRouter = express.Router();
const listController = require("../controllers/listController"); // Import the list controller

// Create a new list
listRouter.post("/create", listController.createList);

// Get all lists
listRouter.get("/", listController.getAllLists);

// Get a list by ID
listRouter.get("/:id", listController.getListById);

// Update a list by ID
listRouter.put("/:id", listController.updateList);

// Delete a list by ID
listRouter.delete("/:id", listController.deleteList);

module.exports = listRouter; // Export the listRouter
