const express = require('express');
const router = express.Router();
const fs = require ("fs");
const crypto = require("crypto");

function readVideos () {
    const videosFile = fs.readFileSync("./data/video-details.json")
    const videosData = JSON.parse(videosFile)
    return videosData
}

router.get("/", (req, res) => {
    const videos = readVideos()
    const responseArray = videos.map(video => {
        return newVideo = {
            "id": video.id,
            "title": video.title,
            "channel": video.channel,
            "image": video.image
        }
    })
    return res.status(200).json(responseArray)
} )

router.get("/:videoId", (req, res) => {
    const videos = readVideos()
    const singleVideo = videos.find((video) => video.id === req.params.videoId);
    if (singleVideo) {
       return res.status(200).json(singleVideo)
    }
    if (!singleVideo) {
       return res.status(404).send("The video you're looking for does not exist")
    }
})

router.post("/", (req, res) => {
    if (!req.body.title || !req.body.description){
        return res.status(400).send("You're missing vital information")
    }
    const newVideo = {
      title: req.body.title,
      channel: "Mohan's Maham",
      image: "http://localhost:8000/images/image9.jpeg",
      description: req.body.description,
      views: 0,
      likes: 0,
      duration: "4:30",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: Date.now(),
      comments: [],
      id: crypto.randomUUID()
    };

    const videos = readVideos();
    videos.push(newVideo);
    fs.writeFileSync("./data/video-details.json", JSON.stringify(videos));
    return res.status(201).json(newVideo);
})



module.exports = router