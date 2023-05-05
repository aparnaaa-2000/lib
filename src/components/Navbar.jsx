import axios from 'axios';
// import { response } from 'express';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './navbar.css'

export default function Navbar ({submitb}) {



  const [state,setstate]=useState([])
  console.log("search",state);
  const [view,setview]=useState([])
  console.log(view);



  const value=(e)=>{
    setstate({...state,value:e.target.value})
  }


  const submitdata =(e)=>{
    e.preventDefault()
    axios.post(`https://api.itbook.store/1.0/search/${state.value}`).then((response)=>{
      console.log("res",response.data.books);
      setview(response.data.books)


    })
  }
  submitb(view)
  // const navigate = useNavigate()
  // const viewpage = (id)=>{
  //   console.log("id====",id);
  //   navigate(`/search/${id}`)
  // }
  





  





  return (
    <div className='container-fluid' >
        <div className='row'>
            <div className='col'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      {/* <a class="navbar-brand" href="#">Hidden brand</a> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li>
          <div style={{paddingRight:"30px",color:"navy"}} className='lib'>LIBRARY SITE</div>
        </li>
      <li class="nav-item">
          <a class="nav-link active" href="/"><h6> HOME</h6></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/bookmark"><h6> BOOKLIST</h6></a>
        </li>
        
        
        {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" onChange={value} placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" onClick={submitdata}   type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
  )
}
