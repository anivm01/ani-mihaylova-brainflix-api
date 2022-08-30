const express = require("express");
const app = express();
const videoRoutes = require("./routes/videosRoutes");
const cors = require("cors");
require("dotenv").config();
const {PORT} = process.env

app.use(cors());

app.use(express.json());

app.use("/images", express.static("./public/images"));

app.use("/videos", videoRoutes)

app.listen(PORT, ()=>{
    console.log("App has started at port " + PORT)
})