const express = require("express");
const app = express();
const videoRoutes = require("./routes/videoRoutes");
const cors = require("cors");
const PORT = 8000;

app.use(cors());

app.use("/images", express.static("./public/images"));

app.use("/videos", videoRoutes)

app.listen(PORT, ()=>{
    console.log("App has started at port " + PORT)
})