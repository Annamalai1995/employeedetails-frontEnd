import axios from "axios"

const link="http://localhost:8080";

// const frame="annamalai:malai"
// const token=btoa(frame)

export const getDetails=async()=>{
    const t = await axios.get(`${link}/maddy/${sessionStorage.getItem('employee')}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return t
}

export const unLoadEmp=async()=>{
    //const t = await axios.get(`${link}/login?logout`)
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("employee")
    window.location.assign("/")
    return
}

export const onQuit=async()=>{
    const t=await axios.delete(`${link}/maddy/Delete/${sessionStorage.getItem('employee')}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("employee")
    return t
}

export const onUpdate=async(obj)=>{
    const t = await axios.put(`${link}/maddy/update`,obj,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return t
}

export const onHike=async()=>{
    const t = await axios.put(`${link}/maddy/updating/${sessionStorage.getItem('employee')}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return t
}

export const onFilter=async(obj)=>{
    const t = await axios.get(`${link}/maddy/datem/${sessionStorage.getItem('employee')}/${obj.start}/${obj.end}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    alert(t.data)
    return t
}

export const addSlip=async(slip)=>{
    //alert("before to back end "+JSON.stringify(slip))
    const t = await axios.post(`${link}/maddy/createpayslip/${sessionStorage.getItem('employee')}`,slip,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
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
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    //alert(JSON.stringify(t.data))
    return t;
}

export const loadEmp=async(obj)=>{
    try{
        const txt=obj.username+":"+obj.password
        const token=btoa(txt)
        const t = await axios.get(`${link}/maddy/${obj.username}`,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        if(t.data)
        {
            sessionStorage.setItem("employee",obj.username)
            sessionStorage.setItem("user",token)
            return t
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

