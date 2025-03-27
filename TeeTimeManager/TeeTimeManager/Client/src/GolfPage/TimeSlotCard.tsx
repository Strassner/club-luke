import ITimeSlot from "../Models/TimeSlotModel";

const TimeSlotCard: React.FC<ITimeSlot> = ({time, price, isOpen }) => {
    const handleClick = () => {
        
    };
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
    return (
        <div className={`card border border-${cardColor} rounded m-3`} 
            style={{}} onClick={handleClick}>
            <div className="card-body">
                <h5 className="card-title">{icon} {formattedTime} </h5>
                {/* <p className="card-text">Price: {price}</p> */}
                <footer>{isOpen ? "Available" : "Booked"}</footer>
            </div>
        </div>
    );
}

export default TimeSlotCard;