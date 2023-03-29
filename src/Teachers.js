
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
function Teachers() {
    const [cont,setcont]=useState([])
    useEffect(() => {
      fetchdata()
     }, [])
     let fetchdata=async()=>{
        let a=await axios.get("https://624bd7e644505084bc55fec9.mockapi.io/recap")
        setcont(a.data)
     }
     const deleteteacher = async (id) => {
        let ask = window.confirm("Do you want to delete!!")
        if (ask) {
          await axios.delete(`https://624bd7e644505084bc55fec9.mockapi.io/recap/${id}`)
          fetchdata();
        }
      }
  return (
    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary p-2 bd-highlight">Teachers details</h6>
                            <Link to={"/portal/teachers/createteacher"} className="btn btn-primary ms-auto p-2 bd-highlight">Create Teacher</Link>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Subject1</th>
                                            <th>Subject2</th>
                                            <th>Salary</th>
                                            <th>Start-Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {
                                            cont.map((e)=>
                                            <tr>
                                            <td>{e.tname}</td>
                                            <td>{e.position}</td>
                                            <td>{e.subject1}</td>
                                            <td>{e.subject2}</td>
                                            <td>{e.salary}</td>
                                            <td>{e.startdate}</td>
                                            <td>
                                                <Link to={`/portal/teachers/view/${e.id}`} className="btn-sm btn-success mr-2 ">View</Link>
                                                <Link to={`/portal/teachers/edit/${e.id}`} className="btn-sm btn-warning mr-2 ">Edit</Link>
                                                <button className='btn-sm btn-danger'  onClick={()=>deleteteacher(e.id)}>Delete</button>
                                            </td>
                                        </tr>)
                                        }
                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
  )
}

export default Teachers