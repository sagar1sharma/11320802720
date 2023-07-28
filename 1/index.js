import axios from "axios";
import express from "express";
import dotenv from "dotenv";
import data from "./data.js";

dotenv.config();
const app = express();
const header = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA1MzY1MTUsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNDg3ZGJlNmEtZDczOC00YTYwLWEyZjUtMTZhODc0MWVmY2M3Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjExMzIwODAyNzIwIn0.aoNCUwUSf_cMJGVZC0u4yrDhsNJVSXl2ktdk-ZHX9DY' };

app.get("/", async(req, res) => {
    const actualData = data;
    const currTime = new Date();
    const currInMin = (currTime.getHours() * 60) + currTime.getMinutes();

    actualData.forEach(element => {
        const trainAdjustedTime = (element.departureTime.Hours * 60) + element.departureTime.Minutes + element.delayedBy;
        if(((currInMin + 720) % 1440) >= (trainAdjustedTime % 1440)){
            res.send({
                name: element.trainName,
                number: element.trainNumber,
                hours: element.departureTime.Hours,
                minutes: element.departureTime.Minutes,
                delay: element.delayedBy,
                seats: element.seatsAvailable,
                price: element.price
            })
        }
    });
})

app.listen(process.env.PORT || 2000, async () => {
    console.log("Server Started");
    console.log(data);
})