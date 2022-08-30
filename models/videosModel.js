const fs = require ("fs");
const filePath = "./data/video-details.json"
const crypto = require("crypto");

function getAllVideos () {
    const videosFile = fs.readFileSync(filePath)
    const videosData = JSON.parse(videosFile)
    return videosData
}

function allVideosAbridged () {
    const videos = getAllVideos()
    const responseArray = videos.map(video => {
        return newVideo = {
            "id": video.id,
            "title": video.title,
            "channel": video.channel,
            "image": video.image
        }
    })
    return responseArray
}

function getOneVideo (videoId) {
    const videos = getAllVideos()
    const singleVideo = videos.find((video) => video.id === videoId);
    return singleVideo
}

function createNewVideo (title, description) {
    const newVideo = {
        title: title,
        channel: "Mohan's Maham",
        image: "http://localhost:8000/images/image9.jpeg",
        description: description,
        views: 0,
        likes: 0,
        duration: "4:30",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: [],
        id: crypto.randomUUID()
      };
      return newVideo
}

function addNewVideo (newVideo) {
    const videos = getAllVideos();
      videos.push(newVideo);
      fs.writeFileSync(filePath, JSON.stringify(videos));
}

module.exports = { 
    getAllVideos, 
    allVideosAbridged, 
    getOneVideo,
    createNewVideo,
    addNewVideo
 }