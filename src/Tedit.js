import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import axios from "axios";
import { createRoutesFromChildren, useNavigate, useParams } from 'react-router-dom';

function Tedit() {
  const navigate=useNavigate()
  let params=useParams()
  const formik = useFormik({
      initialValues: {
          tname: "",
          position: "",
          subject1: "",
          subject2: "",
          salary: "",
          startdate: ""
      },
      validate:(values) => {
          let errors = {}
          if (!values.tname) {
              errors.sname = "please enter the name"
          } else if (values.tname.length < 5) {
              errors.sname = "length should be more than 5 chars "
          }
          if(!values.position){
              errors.standard="please select the standard"
          }
          if (!values.salary) {
              errors.teacher = "please enter the teacher name"
          return errors
          }
      },
      onSubmit: (values) => {
          axios.put(`https://624bd7e644505084bc55fec9.mockapi.io/recap/${params.id}`, values);
          navigate("/portal/teachers")
      }
  })
  useEffect(()=>{
    fetchdata()
  },[])
  let fetchdata=async()=>{
    let a=await axios.get(`https://624bd7e644505084bc55fec9.mockapi.io/recap/${params.id}`);
    formik.setValues(a.data);
  }
  return (
    <div className='container'>
    <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div className='row'>
            <div className='col-lg-8'>
                <label>Name:</label>
                <input type="text" className='form-control' name='tname' onChange={formik.handleChange} value={formik.values.tname}></input>
                {
                  formik.errors.sname ? <span>{formik.errors.sname}</span> : null
                }
            </div>
            <div className='col-lg-8'>
                <label>Position:</label>
                <select className='form-control' name='position' onChange={formik.handleChange} value={formik.values.position}>
                    <option value="Nah">select the position</option>
                    <option value="Temporary staff">Temporary staff</option>
                    <option value="Permanent staff">Permanent staff</option>
                    <option value="HOD">HOD</option>
                </select>
                {
                  formik.errors.position ? <span>{formik.errors.position}</span> : null
                }
            </div>
            <div className='col-lg-8'>
                <label>Subject-1:</label>
                <select className='form-control' name='subject1' onChange={formik.handleChange} value={formik.values.subject1}>
                    <option value="Nah">select subject-1</option>
                    <option value="English">English</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Maths">Maths</option>
                    <option value="Science">Science</option>
                    <option value="Social">Social</option>
                </select>
            </div>
            <div className='col-lg-8'>
                <label>Subject-2:</label>
                <select className='form-control' name='subject2' onChange={formik.handleChange} value={formik.values.subject2}>
                    <option value="Nah">select subject-2</option>
                    <option value="English">English</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Maths">Maths</option>
                    <option value="Science">Science</option>
                    <option value="Social">Social</option>
                </select>
            </div>
            <div className='col-lg-8'>
                <label>Salary:</label>
                <input type="text" className='form-control' name='salary' onChange={formik.handleChange} value={formik.values.salary}></input>
                {
                  formik.errors.salary ? <span>{formik.errors.salary}</span> : null
                }
            </div>
            <div className='col-lg-8'>
                <label>Start-Date:</label>
                <input type="date" className='form-control' name='startdate' onChange={formik.handleChange} value={formik.values.startdate}></input>
            </div>
            <div className="col-lg-12">
                <input type="submit" value="Submit" className="btn btn-primary text-center mt-4" disabled={!formik.isValid}></input>
            </div>
        </div>
    </form>
</div>
  )
}

export default Tedit