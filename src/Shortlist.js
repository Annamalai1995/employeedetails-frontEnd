import { useState } from "react"
import { onFilter } from "./Connect"
import { ViewSlips } from "./Slips"

export const Ask=()=>{

    const[gathered,setGathered]=useState([])

    const[dates,setDates]=useState({
        "start":"",
        "end":""
    })

    const collect=(eve)=>{
        const{name,value}=eve.target
        setDates((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const onFind=async()=>{
        const hai=await onFilter(dates)
        setGathered(hai.data)
    }

    return(
        <>
        {(gathered.length>0)?
            <>
                <ViewSlips custom={gathered} />
            </>
            :
            <>
            <div className="container mt-4">
                <p className="text-warning display-6 text-center">Shortlist by dates</p>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow p-5">
                        <div className="form group">
                            <label>Start Date</label>
                            <input type="text" name="start" value={dates.start} onChange={collect} placeholder="start date yyyy-mm-dd" className="form-control" />
                        </div>
                        <div className="form group">
                            <label>End Date</label>
                            <input type="text" name="end" value={dates.end} onChange={collect} placeholder="end date yyyy-mm-dd" className="form-control" />
                        </div>
                        <div className="mt-3 row justify-content-around">
                            <button className="col-2 btn btn-outline-info" onClick={()=>onFind()}>
                                <i class="bi bi-filter-circle-fill"></i>
                            </button>
                            <button className="col-2 btn btn-outline-danger" type="reset">
                                <i class="bi bi-sign-turn-left"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        }
        </>
    )
}