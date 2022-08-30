const express = require('express');
const router = express.Router();
const videosController = require("../controllers/videosController");

router.get("/", videosController.getVideos)

router.get("/:videoId", videosController.getVideoById)

router.post("/", videosController.postVideo)

module.exports = router