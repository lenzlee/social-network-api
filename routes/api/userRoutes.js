const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// Route = /api/users
router.route("/").get(getAllUser).post(createUser);

// Route = /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Route = /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;