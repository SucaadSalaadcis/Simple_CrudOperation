const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");

router.get("/getStd",studentController.getStd);
router.get("/get/:id",studentController.getOneStd);
router.post("/crtStd",studentController.createStd);
router.put("/updStd/:id",studentController.updateStd);
router.delete("/delStd/:id",studentController.deleteStd);

module.exports = router;
