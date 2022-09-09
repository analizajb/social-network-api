const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// api/thoughts - GET and POST
router.route("/").get(getAllThoughts).post(addThought);

// api/thoughts/:id - using user id for GET, PUT and DELETE
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// api/thoughts/:thoughtId/reactions - POST and DELETE reactions
router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = router;
