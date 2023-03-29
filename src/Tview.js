import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
function Tview() {
  const [view, setview] = useState([])
  let params = useParams()
  useEffect(() => {
    fetchdata()
  }, [])
  let fetchdata = async () => {
    let a = await axios.get(`https://624bd7e644505084bc55fec9.mockapi.io/recap/${params.id}`);
    setview(a.data);
  }
  return (
    <div className='col-lg-6'>
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">Teacher Details</li>
        <li class="list-group-item">{`Name : ${view.tname}`}</li>
        <li class="list-group-item">{`Position : ${view.position}`}</li>
        <li class="list-group-item">{`Subject-1 : ${view.subject1}`}</li>
        <li class="list-group-item">{`Subject-2 : ${view.subject2}`}</li>
        <li class="list-group-item">{`Salary : ${view.salary}`}</li>
        <li class="list-group-item">{`Start-Date : ${view.startdate}`}</li>
      </ul>
    </div>
  )
}

export default Tview