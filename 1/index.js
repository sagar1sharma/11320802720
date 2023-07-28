import axios from "axios";
import express from "express";
import dotenv from "dotenv";
import data from "./data.js";

dotenv.config();
const app = express();

app.get("/", async(req, res) => {
    const actualData = data;
    const currTime = new Date();
    const currInMin = (currTime.getHours() * 60) + currTime.getMinutes();

    // actualData.map((element) => {
    //     
    //     res.send({
    //         hour: element.departureTime.Hours,
    //         minutes: element.departureTime.Minutes,
    //         seconds: element.delayedBy
    //     })
    //     if((trainAdjustedTime - currInMin + 1440) % 1440 <= 720){
    //         res.send({
    //             name: element.trainName,
    //             number: element.trainNumber,
    //             hours: element.departureTime.Hours,
    //             minutes: element.departureTime.Minutes,
    //             delay: element.delayedBy,
    //             seats: element.seatsAvailable,
    //             price: element.price
    //         })
    //     }
    // });

    const validTrains = actualData.filter((ele) => {
        const trainAdjustedTime = (ele.departureTime.Hours * 60) + ele.departureTime.Minutes + ele.delayedBy;
        return ((trainAdjustedTime -currInMin + 1440) % 1440 <= 720);
    })

    res.json({trains: validTrains});
})

app.listen(process.env.PORT || 2000, async () => {
    console.log("Server Started");
})