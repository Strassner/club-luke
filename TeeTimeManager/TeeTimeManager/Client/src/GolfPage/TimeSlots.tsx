import { useEffect, useState } from "react";
import FetchTimeSlots from "../ApiCalls/FetchTimeSlots";
import { CardGroup, Col, Row } from "react-bootstrap";
import TimeSlotCard from "./TimeSlotCard";
import TimeSlotModel from "../Models/TimeSlotModel";


function TimeSlots() {
    const [timeSlots, setTimeSlots]: any = useState<TimeSlotModel[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonTimeSlots = await FetchTimeSlots(); // Wait for the promise to resolve
                setTimeSlots(jsonTimeSlots); // Set the resolved data
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
            <h1 className="color-dark align-self-center m-3">Time Slots</h1>
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