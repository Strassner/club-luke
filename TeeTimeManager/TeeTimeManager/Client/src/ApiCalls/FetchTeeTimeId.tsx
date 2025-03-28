import TeeTimeModel from "../Models/TeeTimeModel";


/* 
    Fetches and returns a teetime object based off an ID.
*/
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