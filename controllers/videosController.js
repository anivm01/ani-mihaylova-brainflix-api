const videosModel = require("../models/videosModel")

function getVideos (req, res) {
    responseArray = videosModel.allVideosAbridged()
    if (responseArray.length <= 0) {
        return res.status(404).send("Couldn't find any videos")
    }
    return res.status(200).json(responseArray)

} 

function getVideoById (req, res) {
    const singleVideo = videosModel.getOneVideo(req.params.videoId)
    if (singleVideo) {
       return res.status(200).json(singleVideo)
    }
    if (!singleVideo) {
       return res.status(404).send("The video you're looking for does not exist")
    }
}
function postVideo (req, res) {
    const title = req.body.title;
    const description = req.body.description;
    if (!title || !description){
        return res.status(400).send("Title or description is empty. Must send valid title and description.")
    }
    const newVideo = videosModel.createNewVideo(title, description)
    videosModel.addNewVideo(newVideo)
    return res.status(201).json(newVideo);
}

module.exports = {
    getVideos,
    getVideoById,
    postVideo
}