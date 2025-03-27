import { useEffect, useState } from "react";
import FetchTimeSlots from "../ApiCalls/FetchTimeSlots";
import { CardGroup } from "react-bootstrap";
import TimeSlotCard from "./TimeSlotCard";
import TimeSlotModel from "../Models/TimeSlotModel";


function TimeSlots() {
    const [timeSlots, setTimeSlots]: any = useState<TimeSlotModel[]>([]);
    const [error, setError]: any = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonTimeSlots = await FetchTimeSlots(); // Wait for the promise to resolve
                setTimeSlots(jsonTimeSlots); // Set the resolved data
            } catch (err) {
                console.error(err);
                setError("Failed to fetch time slots.");
            }
        };

        
        fetchData(); 
    }, []);//re-runs on page load

    //debugging
    // useEffect(() => {
    //     console.log("Updated timeSlots:", timeSlots);
    // }, [timeSlots]);

    return (
        <div className="d-flex h-100  justify-content-start flex-column">
            <h1 className="color-dark align-self-center m-3">Time Slots</h1>
            <CardGroup className="row">
                {timeSlots.map((element: TimeSlotModel) => (
                    <TimeSlotCard 
                        key={element.id}
                        id={element.id} 
                        time={element.time} 
                        price={element.price} 
                        isOpen={element.isOpen}
                    />
                ))}
            </CardGroup>
        </div>
    );
}

export default TimeSlots;