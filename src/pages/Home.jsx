import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import Booklist from '../components/Booklist';
import './Home.css'
// import { response } from 'express';

export default function Home() {
    const [ data,setdata]=useState([])
    console.log("data==",data);

    const datass =(value)=>{
        console.log(value);
        setdata(value)

    }
   
  return (
    <div>
        <div><Navbar submitb={datass} /></div>  <br />
    <div className='container-fluid'>
        <div className='row'>
            <div className='col'>
                <Booklist bhav={data}/>
                
            </div>
        </div>
    </div>
    </div>
  )
}
