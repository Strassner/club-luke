import { useEffect, useState } from "react";
import TimeSlotModel from "../Models/TimeSlotModel";
import FetchTimeSlotId from "../ApiCalls/FetchTimeSlotId";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import BookTeeTime from "./BookTeeTime";
import AlreadyBookedTeeTime from "./AlreadyBookedTeeTime";


function TeeTimeInfo() {
  const [timeSlotInfo, setTimeSlotInfo] = useState<TimeSlotModel>();
  //grabbing the id from the url
  const {id} : any = useParams!();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const jsonTimeSlots = await FetchTimeSlotId({id: id}); // Wait for the promise to resolve
            setTimeSlotInfo(jsonTimeSlots); // Set the resolved data
        } catch (err) {
            console.error(err);
        }
    };

    
    fetchData(); 
}, []);//re-runs on page load

  return(
    <div className="d-flex h-100 w-100 justify-content-start flex-column align-items-center">
    <h1>Tee Time!</h1>
    <div className="border-primary border rounded">
      {/*Based off if the time slot is open, different pages open*/}
      {timeSlotInfo?.isOpen ? <BookTeeTime id={id} /> : <AlreadyBookedTeeTime />}
    </div>
    </div>
  );
}

export default TeeTimeInfo;