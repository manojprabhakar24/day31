import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
function Students() {
   
    const [cont,setcont]=useState([])
    useEffect(() => {
      fetchdata()
     }, [])
     let fetchdata=async()=>{
        let a=await axios.get("https://624bd7e644505084bc55fec9.mockapi.io/user")
        setcont(a.data)
     }
     const deletestudent = async (id) => {
        let ask = window.confirm("Do you want to delete!!")
        if (ask) {
          await axios.delete(`https://624bd7e644505084bc55fec9.mockapi.io/user/${id}`)
          fetchdata();
        }
      }
  return (
    <div class="card shadow mb-4">
                        <div class="card-header py-3  d-flex justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary  p-2 bd-highlight">Students details</h6>
                            <Link to={"/portal/students/createstudent"} className="btn btn-primary ms-auto p-2 bd-highlight">Create Student</Link>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            
                                            <th>Name</th>
                                            <th>Standard</th>
                                            <th>Subject-1</th>
                                            <th>Subject-2</th>
                                            <th>Subject-3</th>
                                            <th>Teacher</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {
                                            
                                            cont.map((e)=>
                                            <tr>
                                            
                                            <td>{e.sname}</td>
                                            <td>{e.standard}</td>
                                            <td>{e.subject1}</td>
                                            <td>{e.subject2}</td>
                                            <td>{e.subject3}</td>
                                            <td><div>{e.teacher}</div>
                                            {/*<Link to={`/students/addteacher/${e.id}`} className="btn-sm btn-info mr-2 ">Add teacher</Link>*/}</td>
                                            <td>
                                                <Link to={`/portal/students/view/${e.id}`} className="btn-sm btn-success mr-2 ">View</Link>
                                                <Link to={`/portal/students/edit/${e.id}`} className="btn-sm btn-warning mr-2 ">Edit</Link>
                                                <button className='btn-sm btn-danger' onClick={()=>deletestudent(e.id)}>Delete</button>
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

export default Students