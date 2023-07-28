import axios from "axios";

const page1 = async(no) => {
    const data = await axios.get('http://localhost:8080/train/'+no);
    console.log(data);

    return(
    <div>
                <p> {data[0].trainName} </p>
                <p> {data[0].trainNumber} </p>
                <p> {data[0].departureTime.Hours}: {data[0].departureTime.Minutes} </p>
                <p> seatsAvailable for sleeper: {data[0].seatsAvailable.sleeper} <br></br> seatsAvailable for AC: {data[0].seatsAvailable.AC} </p>
                <p> Price for sleeper: {data[0].price.sleeper} <br></br> Price for AC: {data[0].price.AC} </p>
    </div>)
}

export default page1;