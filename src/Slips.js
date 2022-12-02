import { useEffect, useState } from "react"
import { loadEmp, loadSlips, onHike } from "./Connect"

export const ViewSlips=(rishi)=>{

    //const[emp,setEmp]=useState({})
    const[allslips,setAllslips]=useState([])

    // const findEmp=async()=>{
    //     const h = await loadEmp()
    //     //alert("@ findEmp "+JSON.stringify(h.data))
    //     setEmp(h.data)
    //     alert("@ findEmp "+JSON.stringify(emp))
    // }

    const loadingRecords=async()=>{
        //alert(JSON.stringify(emp))
        const t = await loadSlips()
        setAllslips(t.data)
        //alert(allslips.length)
    }

    useEffect(()=>{
        //await findEmp()
        if(rishi.custom){
            setAllslips(rishi.custom)
        }
        else{
            loadingRecords()
        }
    },[])

    return(<>
        <div className="container">
            <div className="row justify-content-evenly mt-3">
                <a href="/newslip" className="btn btn-outline-success col-2">
                    <i class="bi bi-newspaper"></i> New Payslip
                </a>
                <button className="btn btn-outline-secondary col-2" onClick={async()=>{
                    const s = await onHike()
                    alert(s.data)
                }}>
                    <i class="bi bi-currency-rupee"></i> Request Hike
                </button>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped text-nowrap p-3" cellSpacing="4px" cellPadding="4px">
                            <thead>
                                <tr>
                                    <th>Payslip id</th>
                                    <th>Payslip date</th>
                                    <th>Basic Pay</th>
                                    <th>Allowances</th>
                                    <th>TDS</th>
                                    <th>Take home</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allslips.map((v)=>(
                                    <tr>
                                        <td>{v.payslipId}</td>
                                        <td>{v.date}</td>
                                        <td>{v.payslipBasicSalary}</td>
                                        <td>{v.payslipAllowance}</td>
                                        <td>{v.paysilpTds}</td>
                                        <td>{v.payslipTakeHome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>)
}