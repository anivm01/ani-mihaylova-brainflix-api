const express = require('express')
const router = express.Router()
const fs = require ("fs")

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
    res.status(200).json(responseArray)
} )

router.get("/:videoId", (req, res) => {
    const videos = readVideos()
    const singleVideo = videos.find((video) => video.id === req.params.videoId);
    if (singleVideo) {
        res.status(200).json(singleVideo)
    }
    if (!singleVideo) {
        res.status(404).send("The video you're looking for does not exist")
    }
})


module.exports = router