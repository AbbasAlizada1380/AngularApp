// server/controllers/userController.js
const { User } = require("../models"); // Assuming your User model is in 'models' directory

// Create a new user
exports.createUser = async (req, res) => {
  try {
    // Get data from request body
    const { name, email, password } = req.body;

    // Validate if the data is provided
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields (name, email, password) are required." });
    }

    // Create the user
    const newUser = await User.create({
      name,
      email,
      password, // Remember to hash the password in a real app!
    });

    // Return the created user
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating user." });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving users." });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find user by primary key (id)
    const user = await User.findByPk(id);

    // If user not found
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving user." });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    // Find user by primary key (id)
    const user = await User.findByPk(id);

    // If user not found
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Update user data
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password; // Don't forget to hash the password in real applications

    // Save updated user
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating user." });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Find user by primary key (id)
    const user = await User.findByPk(id);

    // If user not found
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Delete the user
    await user.destroy();

    return res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting user." });
  }
};
