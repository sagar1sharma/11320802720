import axios from "axios";
import express from "express";
import dotenv from "dotenv";
import data from "./data.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
const actualData = data;

//for question 2, for the purpose of front end
app.get("/all", (req, res) => {
    res.json({trains: actualData});
})

//for question 2, for the purpose of front end
app.get("/train/:no", (req, res) => {
    const no = req.params.no;
    res.json({trains: actualData.filter((ele) => {
        return no == ele.trainNumber;
    })})
})

//For question 1, returning all trains whose departure time is upto next 12 hours including delay time
app.get("/", async(req, res) => {
    const currTime = new Date();
    const currInMin = (currTime.getHours() * 60) + currTime.getMinutes();

    const validTrains = actualData.filter((ele) => {
        const trainAdjustedTime = (ele.departureTime.Hours * 60) + ele.departureTime.Minutes + ele.delayedBy;
        return ((trainAdjustedTime -currInMin + 1440) % 1440 <= 720);
    })

    res.json({trains: validTrains});
})

app.listen(process.env.PORT || 2000, async () => {
    console.log("Server Started");
})