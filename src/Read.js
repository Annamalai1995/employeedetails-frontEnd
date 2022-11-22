import { useEffect, useState } from "react";
import { read } from "./MyEmployeeValues";

export const Reading=(myvalue)=>
{
    const[employee,setEmployee]=useState(
            {
                "empId":0,
                "empName":"",
                "empUsername":"",
                "empPassword":"",
                "empDesignation":"",
                "empExp":"",
                "empSalary":0
            })
            useEffect(()=>
            {
                callreading()
            })


            const callreading=()=>
            {
                setEmployee(read(myvalue.who))
            }
    return(
        <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className=" bg-info col-lg-8 col-md-10 col-sm-12 text-center">
                    <div className="card-title text-dark">{employee.empId}
                    <div className="card-body">
                        <p className="text-center">{employee.empName}</p>
                        <p className="text-center">{employee.empUsername}</p>
                        <p className="text-center">{employee.empPassword}</p>
                        <p className="text-center">{employee.empDesignation}</p>
                        <p className="text-center">{employee.empExp}</p>
                        <p className="text-center">{employee.empSalary}</p>
                    </div>

                    </div>

                </div>

            </div>

        </div>
        </>
    );
}