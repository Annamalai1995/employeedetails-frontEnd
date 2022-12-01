import axios from "axios"

const link="http://localhost:8080";

const frame="razak:mohamed"
const token=btoa(frame)

export const addSlip=async(slip)=>{
    //alert("before to back end "+JSON.stringify(slip))
    const t = await axios.post(`${link}/maddy/createpayslip/${sessionStorage.getItem('employee')}`,slip,{
        headers:{
            "Authorization":`Basic ${token}`
        }
    })
    return t
}

export const loadSlips=async()=>{
    //alert("received employee "+sessionStorage.getItem("employee"))
    //const y=JSON.parse(sessionStorage.getItem("employee"))
    //console.log(y)
    const t = await axios.get(`${link}/maddy/fetch/${sessionStorage.getItem('employee')}`,{
        headers:{
            "Authorization":`Basic ${token}`
        }
    })
    //alert(JSON.stringify(t.data))
    return t;
}

export const loadEmp=async()=>{
    try{
        const t = await axios.get(`${link}/maddy/razak`,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        if(t.data)
        {
            sessionStorage.setItem("employee","razak")
            return
        }
    }
    catch(err){
        alert("invalid")
    }
}

export const join=async(object)=>
{
    
    const temp=await axios.post(`${link}/maddy/newone`,object)
    alert(JSON.stringify(temp.data)+"has been added in backend")
    return temp;
}

