import TeeTimeModel from "../Models/TeeTimeModel";



async function FetchTeeTimeId({id}: {id: number}):Promise<TeeTimeModel>{
    const url = `https://localhost:7036/api/TeeTimes/${id}`;

    try{

        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response Status: ${response.status}`);
        }
        const data = response.json();
        return data;
    }catch(e){
        console.error("Error", e);
        throw e;
    }
}

export default FetchTeeTimeId;