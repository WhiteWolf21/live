import express from "express";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

import timesnap from 'timesnap'
import timecut from 'timecut'

const PORT = 80;
const app = express();
const server = http.createServer(app);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, "./");

app.use(express.static(outputDir));

app.get("/*", function(req, res) {
    res.sendFile(path.join(outputDir, "index.html"));
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

setInterval(() => {
    fakeStream();
}, 86400000)

const fakeStream = () => {
    timesnap({
        url: 'http://localhost:80',
        viewport: {
          width: 960,           
          height: 640
        },
        fps: 1,             
        duration: 86400,             
        outputPattern: 'current-realtime-tracking-wafer.png',
        canvasCaptureMode: "immediate:png",
        // shouldSkipFrame: (objFrame)=> {
        //     // console.log(objFrame.frameCount)
        //     return objFrame.frameCount % 10 === 0
        // }
      }).then(function () {
        console.log('Done!');
      });
    // timecut({
    //     url: 'http://localhost:80',
    //     viewport: {
    //       width: 960,           
    //       height: 640
    //     },
    //     fps: 60,                  
    //     duration: 60,             
    //     output: 'current-realtime-tracking-wafer.mp4'       
    //   }).then(function () {
    //     console.log('Done!');
    //   });
}

fakeStream();

