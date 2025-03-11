// server/controllers/listController.js
const { List } = require("../models"); // Import the List model

// Create a new list
exports.createList = async (req, res) => {
  try {
    // Extract data from the request body
    const { title, description, status } = req.body;

    // Validate input data
    if (!title || !description || !status) {
      return res.status(400).json({
        message: "All fields (title, description, status) are required.",
      });
    }

    // Create the new list entry
    const newList = await List.create({
      title,
      description,
      status,
    });

    // Return the created list entry
    return res.status(201).json(newList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating list." });
  }
};

// Get all lists
exports.getAllLists = async (req, res) => {
  try {
    const lists = await List.findAll(); // Retrieve all list entries
    return res.status(200).json(lists);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving lists." });
  }
};

// Get a list by ID
exports.getListById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find list entry by ID
    const list = await List.findByPk(id);

    // If the list is not found, return 404
    if (!list) {
      return res.status(404).json({ message: "List not found." });
    }

    // Return the list
    return res.status(200).json(list);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving list." });
  }
};

// Update a list by ID
exports.updateList = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    // Find the list by ID
    const list = await List.findByPk(id);

    // If the list is not found, return 404
    if (!list) {
      return res.status(404).json({ message: "List not found." });
    }

    // Update list fields
    list.title = title || list.title;
    list.description = description || list.description;
    list.status = status || list.status;

    // Save the updated list entry
    await list.save();

    // Return the updated list entry
    return res.status(200).json(list);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating list." });
  }
};

// Delete a list by ID
exports.deleteList = async (req, res) => {
  try {
    const { id } = req.params;

    // Find list by ID
    const list = await List.findByPk(id);

    // If the list is not found, return 404
    if (!list) {
      return res.status(404).json({ message: "List not found." });
    }

    // Delete the list
    await list.destroy();

    return res.status(200).json({ message: "List deleted successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting list." });
  }
};
