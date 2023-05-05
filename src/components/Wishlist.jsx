import React, { useState } from 'react'
import Navbar from './Navbar'

export default function Wishlist() {

    const [user,setuser]=useState(JSON.parse(localStorage.getItem("details"))||[])
    console.log("user=======",user);

  const deletdata = (title)=>{
    const deletelist = user.filter((del)=>del.title!=title)
    localStorage.setItem("details",JSON.stringify(deletelist))
    window.location.reload()
    console.log("deletelist=====",deletelist);

  }


  return (
    <div>
        <div className='row'>
            {/* <Navbar></Navbar> */}
        </div> <br />
    <div className='container-fluid'>
        <div className='row'>
       
            {/* <div className='col'> */}
            {user.map((value)=>
            <div class="col-sm-3">
  
    <div class="card-group"/>
  <div class="card">
    <img src={value.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{value.title}</h5>
      <p class="card-text">{value.subtitle}</p>
      {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}

      <svg onClick={()=>deletdata(value.title)} xmlns="http://www.w3.org/2000/svg" width="30"  height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
    </div>
  </div>
  

  </div>
   )} 

            {/* </div> */}
            
        </div>
    </div>
    </div>
  )
}
