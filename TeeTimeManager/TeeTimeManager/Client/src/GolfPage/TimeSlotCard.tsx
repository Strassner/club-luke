import ITimeSlot from "../Models/TimeSlotModel";

const TimeSlotCard: React.FC<ITimeSlot> = ({ id, time, price, isOpen }) => {
    const handleClick = () => {
        
    };
    //formatting the time into human readable
    const timeAsDate = new Date(time);
    const formattedMinutes: string = 
        ((timeAsDate.getMinutes() == 0) ? "00" : timeAsDate.getMinutes().toString());
    //convert military time to standard, and add pm or am
    const morningNight: string = ((timeAsDate.getHours() % 12) == 0) ? "AM" : "PM";
    const formattedHours = timeAsDate.getHours() % 12;
    //put it all together into a string
    const formattedTime: string = `${formattedHours}:${formattedMinutes} ${morningNight}`;
    //the border color changes from green to red if the time slot is open or not
    const cardColor : String = (isOpen == true) ? "success" : "danger";

    return (
        <div className={`card border border-${cardColor} rounded m-3 col-2`} onClick={handleClick}>
            <div className="card-body">
                <h5 className="card-title">{formattedTime}</h5>
                <p className="card-text">Price: {price}</p>
                <footer>{isOpen ? "Available" : "Booked"}</footer>
            </div>
        </div>
    );
}

export default TimeSlotCard;