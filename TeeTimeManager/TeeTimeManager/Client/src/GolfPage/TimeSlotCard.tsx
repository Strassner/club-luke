import ITimeSlot from "../Models/TimeSlotModel";
import { useNavigate } from "react-router-dom";

const TimeSlotCard: React.FC<ITimeSlot> = ({id, time, price, isOpen }) => {
    const navigate = useNavigate();
    //formatting the time into human readable
    const timeAsDate = new Date(time);
    //getminutes returns a 0, this formats that to '00' 
    const formattedMinutes: string = 
        ((timeAsDate.getMinutes() == 0) ? "00" : timeAsDate.getMinutes().toString());
    //convert military time to standard, and add pm or am
    const morningNight: string = (timeAsDate.getHours() < 12) ? "AM" : "PM";
    const formattedHours = (timeAsDate.getHours() == 12) 
        ? timeAsDate.getHours() : timeAsDate.getHours() % 12;
    //put it all together into a string
    const formattedTime: string = `${formattedHours}:${formattedMinutes} ${morningNight}`;
    //the border color changes from green to red if the time slot is open or not
    const cardColor : String = (isOpen == true) ? "success" : "danger";
    //this icon helps the user determine if the time is available at a glance
    const icon : String = (isOpen == true) ? "🟢" : "🔴";

    const handleClick= () => {
        navigate(`/Golf/TeeTimeInfo/${id}`);
    }

    return (
        <div className={`card border border-${cardColor} btn rounded m-3`} 
            style={{}} onClick={handleClick}>
            <div className="card-body">
                <h5 className="card-title">{icon} {formattedTime} </h5>
                {/* 
                    Add this in at a later time, needs better formatting
                <p className="card-text">Price: {price}</p> */}
                <footer>{isOpen ? "Available" : "Booked"}</footer>
            </div>
        </div>
    );
}

export default TimeSlotCard;