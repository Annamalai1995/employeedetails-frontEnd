import { useEffect, useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { list } from "./MyEmployeeValues"
import { Register } from "./NewEmployeeForm"

export const Homepage=()=>
{
    const[tmparray,setTmparray]=useState([])
    const[createView,setCreateView]=useState(false)

    const result=()=>
    {
        setTmparray(list)
    }
    useEffect(()=>
    {
       result()
    })

    return(
        <>
        <div className="Container mt-5">
            {(createView)?
            <>
            <Register/>
            <button className="btn btn-outline-secondary" onClick={
                ()=>
                {
                    setCreateView(false)
                }
            }>
                Back
            </button>
            </>:
            <>
            <button className="btn btn-outline-success" onClick={
                ()=>
                {
                    setCreateView(true)
                }
            }>
                Create a neww User
            </button>
            <></>

            
            </>
            }
            
        </div>
        </>
    );
}