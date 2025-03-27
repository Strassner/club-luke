import TimeSlotModel from "../Models/TimeSlotModel";


async function FetchTimeSlots(): Promise<TimeSlotModel[]> {
    const url = "https://localhost:7036/api/TimeSlots";

    try {
        const response = await fetch(url);//making the fetch to retreive all TimeSlots
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);//throwing error to the catch block
        }

        const data: TimeSlotModel[] = await response.json(); //strongly typed due to using TimeSlotModel
        return data; //returns json data to the caller
    } catch (error) {
        console.error(error);//log the error to the  console
        throw error; //throw the error again so the caller can handle it too
    }
}

export default FetchTimeSlots;