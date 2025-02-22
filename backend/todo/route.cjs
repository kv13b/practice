const express = require("express");
const router = express.Router();
const controller = require("./controller.cjs");
router.post("/add-task", controller.add_task);
router.get("/get-task", controller.get_task);
router.delete("/delete-task/:id", controller.del);

module.exports = router;
