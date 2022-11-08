const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
   deleteGoals,
  updateGoals,
} = require("../controllers/goalController");

router.get("/", getGoals);
router.post("/", setGoals);
 router.delete("/:id", deleteGoals);
router.put("/:id", updateGoals);

module.exports = router;
