import axios from "axios"

const link="http://localhost:8080";

const frame="razak:mohamed"
const token=btoa(frame)

export const addSlip=async(slip)=>{
    alert("before to back end "+JSON.stringify(slip))
    const t = await axios.post(`${link}/maddy/createpayslip`,{
        headers:{
            "Authorization":`Basic ${token}`
        }
    },slip)
    return t
}

export const loadSlips=async(emp)=>{
    alert("received employee "+JSON.stringify(emp))
    const t = await axios.get(`${link}/maddy/fetch`,{
        headers:{
            "Authorization":`Basic ${token}`
        }
    }, emp)
    return t;
}

export const loadEmp=async()=>{
    const t = await axios.get(`${link}/maddy/razak`,{
        headers:{
            "Authorization":`Basic ${token}`
        }
    })
    alert(t.data.username)
    return t
}

export const join=async(object)=>
{
    
    const temp=await axios.post(`${link}/maddy/newone`,object)
    alert(JSON.stringify(temp.data)+"has been added in backend")
    return temp;
}

