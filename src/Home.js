import { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { onQuit, unLoadEmp } from "./Connect"
import { FetchExact, list, remove } from "./MyEmployeeValues"
import { Register } from "./NewEmployeeForm"
import { Reading } from "./Read"
import { Update } from "./Update"

export const Homepage=()=>{
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">R-Buddy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="sadham" />
                    <Navbar.Collapse id="sadham">
                        <Nav className="ms-auto">   
                            {/* <Nav.Link href="/create">New</Nav.Link> */}
                            <Nav.Link href="/view">View</Nav.Link>
                            <Nav.Link href="/short">Shortlist</Nav.Link>
                            <Nav.Link href="/ups">Update yourself</Nav.Link>
                            <button className="btn btn-dark" onClick={async()=>{
                                //alert("Button called")
                                const d = await unLoadEmp()
                                alert(d.data)
                            }}>
                                Logout
                            </button>
                            <button className="btn btn-danger" onClick={async()=>{
                                const d = await onQuit()
                                alert(d.data)
                            }}>
                                <i class="bi bi-door-open-fill"></i>Quit Job
                            </button>
                            {/* <Nav.Link href="/hi">Home</Nav.Link>
                            <Nav.Link href="/hai">New</Nav.Link>
                            <Nav.Link href="/hey">New</Nav.Link>
                            <Nav.Link href="/hello">New</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

// export const Homepage=()=>
// {
//     const[tmparray,setTmparray]=useState([])
//     const[createView,setCreateView]=useState(false)
//     const[readView,setReadView]=useState(false)
//     const[updateView,setUpdateView]=useState(false)
//     const[pos,setPos]=useState(0)
//     const[obj,setObj]=useState({})

//     const result=()=>
//     {
//         setTmparray(list)
//     }
//     useEffect(()=>
//     {
//        result()
//     })

//     return(
//         <>
//         <div className="Container mt-5">
//             {(createView)?
//             <>
//             <Register/>
//             <button className="btn btn-outline-secondary" onClick={
//                 ()=>
//                 {
//                     setCreateView(false)
//                 }
//             }>
//                 Back
//             </button>
//             </>
//             :
//             (readView)?
//             <>
//             <Reading who={pos}/>
//             <button className="btn btn-outline-secondary" onClick={
//                 ()=>
//                 {
//                     setReadView(false)
//                 }
//             }>
//                 BackS
//             </button>
//             </>
//              :
//              (updateView)?
//              <>
//              <Update who={pos} mention={obj}/>
//              <button className="btn btn-outline-secondary" onClick={
//                  ()=>
//                  {
//                      setUpdateView(false)
//                  }
//              }>
//                  Back
//              </button>
//              </>
//             :
//             <>
//             <button className="btn btn-outline-success" onClick={
//                 ()=>
//                 {
//                     setCreateView(true)
//                 }
//             }>
//                 Create a new User
//             </button>
//             <div className="row justify-content-center">
//                         <div className="table-responsive-md">
//                             <table className="col-lg-8 col-md-10 col-sm-12 table table-striped  p-4 shadow rounded">
//                                 <thead>
//                                     <tr>
//                                         <th>Employee Id</th>
//                                         <th>Employee Name</th>
//                                         <th>Employee Username</th>
//                                         <th>Employee Password</th>
//                                         <th>Employee Designation</th>
//                                         <th>Employee Experience</th>
//                                         <th>Employee Salary</th>
//                                         <th>Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         tmparray.map((ele,ind)=>
//                                         (
//                                             <tr>
//                                             <td>{ele.empId}</td>
//                                             <td>{ele.empName}</td>
//                                             <td>{ele.empUsername}</td>
//                                             <td>{ele.empPassword}</td>
//                                             <td>{ele.empDesignation}</td>
//                                             <td>{ele.empExp}</td>
//                                             <td>{ele.empSalary}</td>     
//                                             <td>
//                                                 <button className="btn btn-outline-info" onClick={
//                                                      ()=>
//                                                      {
//                                                          setReadView(true)
//                                                          setPos(ind)
//                                                      }
//                                                 }>
//                                                     Read
//                                                 </button>
//                                                 <button className="btn btn-outline-info" onClick={
//                                                      ()=>
//                                                      {
//                                                          setUpdateView(true)
//                                                          setPos(ind)
//                                                          const temp=FetchExact(ele.empName);
//                                                         //  setObj(temp);
//                                                      }
//                                                 }>
//                                                     Update
//                                                 </button>
//                                                 <button className="btn btn-outline-info" onClick={
//                                                      ()=>
//                                                      {
//                                                          setTmparray(remove(ind))
//                                                      }
//                                                 }>
//                                                     Delete
//                                                 </button>

//                                             </td>
//                                             </tr>

//                                         ))
//                                     }
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//             </>
//             }
//         </div>
//         </>
//     );
// }