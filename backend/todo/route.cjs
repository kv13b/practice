const express = require("express");
const router = express.Router();
const controller = require("./controller.cjs");
router.post("/add-task", controller.add_task);
router.get("/", controller.get_task);
router.delete("/delete-task/:id", controller.del);
router.put("update-task", controller.update);

module.exports = router;
