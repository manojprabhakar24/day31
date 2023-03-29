

import React, { useContext } from 'react'
import axios from "axios";
import { useEffect } from "react"
import Ucont from './Context';
function Dashboard() {


  let dataa = useContext(Ucont);
  let tdata=useContext(Ucont)
  useEffect(() => {
    fetchdata()
  }, []);
  let fetchdata = async () => {
    let a = await axios.get("https://624bd7e644505084bc55fec9.mockapi.io/user");
    dataa.setUser(a.data);
    let b=await axios.get("https://624bd7e644505084bc55fec9.mockapi.io/recap");
    tdata.setteach(b.data);
  }
  return (

    
<table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Student Name</th>
      <th scope="col">Teacher Name</th>
    </tr>
  </thead>
  <tbody>
    {
      dataa.user.map((e)=>{
        return <tr>
        <th scope="row">{e.id}</th>
        <td>{e.sname}</td>
        <td>{e.teacher}</td>
      </tr>
      })
    }
    
   
  </tbody>
</table>
    
  )
}

export default Dashboard