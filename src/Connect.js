import axios from "axios"

const link="http://localhost:8080";

export const join=async(object)=>
{
    
    const temp=await axios.post(`${link}/maddy/newone`,object)
    alert(JSON.stringify(temp.data)+"has been added in backend")
    return temp;
}

