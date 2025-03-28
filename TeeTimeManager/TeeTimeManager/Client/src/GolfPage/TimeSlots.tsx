import { useEffect, useState } from "react";
import FetchTimeSlots from "../ApiCalls/FetchTimeSlots";
import { CardGroup, Col, Row } from "react-bootstrap";
import TimeSlotCard from "./TimeSlotCard";
import TimeSlotModel from "../Models/TimeSlotModel";


function TimeSlots() {
    const [timeSlots, setTimeSlots] = useState<TimeSlotModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>();
    //displaying todays date
    const today = new Date();
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    //formatting todays date - .getDay() & .getMonth() return a number to represent
    //the value, hence using the number as an index in arrays
    const todaysDate: String = `${daysOfWeek[today.getDay()]}, ${monthsOfYear[today.getMonth()]} ${today.getDate()}`;


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const jsonTimeSlots = await FetchTimeSlots(); // Wait for the promise to resolve
                setTimeSlots(jsonTimeSlots); // Set the resolved data
                setIsLoading(false);
            } catch (err) {
                console.error(err);
            }
        };

        
        fetchData(); 
    }, []);//re-runs on page load

    //debugging
    // useEffect(() => {
    //     console.log("Updated timeSlots:", timeSlots);
    // }, [timeSlots]);

    return (
        <div className="d-flex h-100 w-100 justify-content-start flex-column">
             {/*Display loading if loading, and TeeTime header if not*/}
        {(isLoading) ? <h1>Loading....</h1> : 
            <h1 className="color-dark align-self-center m-3">Tee Times - {todaysDate}</h1>}
            <Row xs={2} sm={4} md={6} lg={8} className="px-4" >
                {timeSlots.map((element: TimeSlotModel) => (
                    <Col key={element.id}>
                    <TimeSlotCard 
                        key={element.id}
                        id={element.id} 
                        time={element.time} 
                        price={element.price} 
                        isOpen={element.isOpen}
                    />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default TimeSlots;