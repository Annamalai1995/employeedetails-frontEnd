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
                Create a new User
            </button>
            <div className="row justify-content-center">
                        <div className="table-responsive-md">
                            <table className="col-lg-8 col-md-10 col-sm-12 table table-striped  p-4 shadow rounded">
                                <thead>
                                    <tr>
                                        <th>Employee Id</th>
                                        <th>Employee Name</th>
                                        <th>Employee Username</th>
                                        <th>Employee Password</th>
                                        <th>Employee Designation</th>
                                        <th>Employee Experience</th>
                                        <th>Employee Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tmparray.map((ele,ind)=>
                                        (
                                            <tr>
                                            <td>{ele.empId}</td>
                                            <td>{ele.empName}</td>
                                            <td>{ele.empUsername}</td>
                                            <td>{ele.empPassword}</td>
                                            <td>{ele.empDesignation}</td>
                                            <td>{ele.empExp}</td>
                                            <td>{ele.empSalary}</td>     
                                            </tr>

                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
         
            </>
            }
            
        </div>
        </>
    );
}