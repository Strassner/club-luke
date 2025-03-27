import TeeTimeModel from "./TeeTimeModel";


interface TimeSlotModel {
    id: number;
    time: Date;
    price: number;
    isOpen: boolean;
    timeSlotTeeTimeId?: number;
}

export default TimeSlotModel;