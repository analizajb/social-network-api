const router = require("express").Router();
// import the functionality and hook it up with the routes
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// Set up GET all and POST at /api/users
router.route("/").get(getAllUsers).post(createUsers);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;