import TeeTimeModel from "../Models/TeeTimeModel";



async function PostTeeTime({nameUnder, holes, timeSlotId } : TeeTimeModel){
    const url = "https://localhost:7036/api/TeeTimes";
    const data = {
        NameUnder: nameUnder,
        Holes: holes,
        TimeSlotId: timeSlotId
    }
    try{
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log("Success: ", response);
    console.log("Status", response.status);
    return response.status;
    }catch(e){
        console.log("Error: ", e);
    }
}

export default PostTeeTime;