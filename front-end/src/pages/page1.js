import axios from "axios";

const page1 = async() => {
    const data = await axios.get('http://localhost:8080/all');
    console.log(data);

    return(
    <div>
    <ul>
        {data.map((ele) => {
            return(<li>
                <p> {ele.trainName} </p>
                <p> {ele.trainNumber} </p>
                <p> {ele.departureTime.Hours}: {ele.departureTime.Minutes} </p>
                <p> seatsAvailable for sleeper: {ele.seatsAvailable.sleeper} <br></br> seatsAvailable for AC: {ele.seatsAvailable.AC} </p>
                <p> Price for sleeper: {ele.price.sleeper} <br></br> Price for AC: {ele.price.AC} </p>
            </li>)
        })}
    </ul>
    </div>)
}

export default page1;
