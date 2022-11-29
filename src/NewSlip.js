import { useEffect, useState } from "react"
import { useNavigate, useNavigation } from "react-router-dom"
import { addSlip, loadEmp } from "./Connect"

export const NewPaySlip=()=>{
    const nav=useNavigate()
    const[emp,setEmp]=useState({})
    const[slip,setSlip]=useState({
        "empDetails":{},
        "date":"",
        "payslipAllowance":0.0,
        "paysilpTds":0.0,
    })

    const findEmp=async()=>{
        const h = await loadEmp()
        setEmp(h.data)
    }

    useEffect(()=>{
        findEmp()
    },[])

    const hello=(eve)=>{
        const{name,value}=eve.target
        setSlip((old)=>{
            return{
                ...old,
                [name]:value,
                empDetails:emp
            }
        })
    }

    const onAdd=async()=>{
        const t = await addSlip(slip)
        alert(t.data)
        nav("/view")
    }

    return(
        <>
            <div className="container">
                <h1 className="text-center text-success">New payslip generation</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-9 col-sm-12 p-4 shadow-lg rounded-5">
                        <div className="form group">
                            <label>Payslip date </label>
                            <input type="text" className="form-control" placeholder="yyyy-mm-dd" name="date" value={slip.date} onChange={hello} />
                        </div>
                        <div className="form group">
                            <label>Payslip tds </label>
                            <input type="text" placeholder="TDS" className="form-control" name="paysilpTds" value={slip.paysilpTds} onChange={hello} />
                        </div>
                        <div className="form group">
                            <label>Payslip allowances </label>
                            <input type="text" placeholder="allowance" name="payslipAllowance" className="form-control" value={slip.payslipAllowance} onChange={hello} />
                        </div>
                        <div className="mt-3 row justify-content-around">
                            <button className="btn btn-outline-primary col-2" onClick={()=>onAdd()}>
                                <i class="bi bi-database-add"></i>
                            </button>
                            <button className="btn btn-outline-dark col-2" type="reset">
                                <i class="bi bi-x-octagon-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}