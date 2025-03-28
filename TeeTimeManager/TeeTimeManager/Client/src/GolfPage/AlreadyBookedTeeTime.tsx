import { useEffect, useState } from "react";
import { FormCheck, FormControl, FormGroup, FormLabel, Button, Container } from "react-bootstrap";
import PostTeeTime from "../ApiCalls/PostTeeTime";
import { useNavigate } from "react-router-dom";
import TeeTimeModel from "../Models/TeeTimeModel";
import FetchTeeTimeId from "../ApiCalls/FetchTeeTimeId";

function AlreadyBookedTeeTime({id}: {id: number}) {
    const[isLoading, setIsLoading] = useState<boolean>();
    const[teeTimeInfo, setTeeTimeInfo] = useState<TeeTimeModel>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const jsonTimeSlots = await FetchTeeTimeId({id: id}); // Wait for the promise to resolve
                setTeeTimeInfo(jsonTimeSlots); // Set the resolved data
                setIsLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData(); 
}, []);//re-runs on page load

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/Golf/TimeSlots");
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h3>Booked For: {teeTimeInfo?.nameUnder}</h3>
            <h3>{teeTimeInfo?.holes.toString()} Holes</h3>
                <div className="justify-content-center">
                <Button variant="danger" onClick={handleGoBack} className="m-1">Go Back</Button>
                </div>
        </div>
    );
}

export default AlreadyBookedTeeTime;