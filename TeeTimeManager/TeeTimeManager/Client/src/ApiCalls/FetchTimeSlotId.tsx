import TimeSlotModel from "../Models/TimeSlotModel";


async function FetchTimeSlotId({ id }: { id: any }) : Promise<TimeSlotModel>{
    const url = `https://localhost:7036/api/TimeSlots/${id}`;

    try {
        const response = await fetch(url);//making the fetch to retrieve Timeslot with {id}
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);//throwing error to the catch block
        }

        const data: TimeSlotModel = await response.json(); //strongly typed due to using TimeSlotModel
        return data; //returns json data to the caller
    } catch (error) {
        console.error(error);//log the error to the  console
        throw error; //throw the error again so the caller can handle it too
    }
}

export default FetchTimeSlotId;