import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import './booklist.css'
import Navbar from './Navbar';

export default function Booklist ({bhav}) {

  console.log("bhav",bhav);
  const [state,setstate]=useState([]);
  console.log('state=========',state);
  const [books,setbooks]= useState(JSON.parse(localStorage.getItem("details"))||[])
  console.log("books",books);

  
   useEffect(()=>{
    axios.get(`https://api.itbook.store/1.0/new`).then((response)=>{
      console.log("response==",response.data.books);
      setstate(response.data.books)
    })

   },[])
   const book=(id)=>{
    setbooks([...books,id])
    // const filter = books.filter((filtereddata)=>{
    //   return filtereddata.data= id.data
    // })
   }

    const booklist = (title)=>{
      const bookdata = state.filter((filtereddata)=>filtereddata.title == title)
setbooks([...books,bookdata[0]])
 localStorage.setItem("details",JSON.stringify(books))
    console.log("bookdata",bookdata);
   


   }
   


   

    
  return (
    <div>
      {/* <div>
        <Navbar />
      </div> */}

    <div className='container-fluid' >
        <div className='col'>
            <div className='row'>
            {/* <div class="row"> */}
            
             {

              bhav[0]!=undefined ?
              bhav.map((details)=>(
            
                
//  {state.map((data)=>(
  <div class="col-sm-3 mb-3 mb-sm-0">
  
    <div class="card">
      <div class="card-body">
        <img src={details.image} ></img>
        <h5 class="card-title">{details.title}</h5>
        
        <p class="card-text">{details.subtitle}</p>
        <p class="card-text">{details.price}</p>
        {/* <a href='#'>{data.url}</a> <br /> */}
        <a href="#" onClick={()=>{booklist(details.title)}} class="btn btn-primary">Add to booklist</a>
      </div>
    </div>
  

  </div>

  )) : 
  state.map((details)=>(

  <div class="col-sm-3 mb-3 mb-sm-0">
  
  <div class="card">
    <div class="card-body">
      <img src={details.image} ></img>
      <h5 class="card-title">{details.title}</h5>
      
      <p class="card-text">{details.subtitle}</p>
      <p class="card-text">{details.price}</p>
      {/* <a href='#'>{data.url}</a> <br /> */}
      <a href="#" onClick={()=>booklist(details.title)} class="btn btn-primary">Add to booklist</a>
    </div>
  </div>
  


</div>
))








              }

  </div>

            

            </div>
        </div>
        </div>
  
  )
}

