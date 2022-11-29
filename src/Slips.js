import { useEffect, useState } from "react"
import { loadEmp, loadSlips } from "./Connect"

export const ViewSlips=()=>{

    const[emp,setEmp]=useState({})
    const[allslips,setAllslips]=useState([])

    const findEmp=async()=>{
        const h = await loadEmp()
        setEmp(h.data)
        alert(JSON.stringify(emp))
    }

    const loadingRecords=async()=>{
        const t = await loadSlips(emp)
        setAllslips(t.data)
        alert(allslips.length)
    }

    useEffect(()=>{
        findEmp()     
    },[])

    return(<>
        <div className="container">
            <a href="/newslip" className="btn btn-outline-success">
                <i class="bi bi-newspaper"></i> New Payslip
            </a>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped text-nowrap p-3 shadow rounded-5" cellSpacing="4px" cellPadding="4px">
                            <thead>
                                <tr>
                                    <th>Payslip id</th>
                                    <th>Payslip date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allslips.map((v)=>(
                                    <tr>
                                        <td>{v.payslipId}</td>
                                        <td>{v.date}</td>
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