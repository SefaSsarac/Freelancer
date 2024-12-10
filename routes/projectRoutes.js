const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");


router.get("/", projectController.getAllProjects);


router.get("/add", projectController.getAddProjectPage);


router.post("/add", projectController.addProject);


router.post("/delete/:id", projectController.deleteProject);

module.exports = router;
