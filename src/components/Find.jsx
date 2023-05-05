import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementbyAmount } from '../Redux/Search';
// import axios from 'axios';

export default function Find() {

// const {searchstate} =useSelector((values)=>values.search)
// const dispatch = useDispatch()




// useEffect(()=>{
//   axios.get(`https://api.itbook.store/1.0/search/${searchstate.value}`).then((value)=>{
//     console.log("val====",value.data.books);
//     dispatch(incrementbyAmount(value.data.books))
//   })
// },[])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
        <div class="col-sm-3 mb-3 mb-sm-0">
  {/* {searchstate.map((data)=>( */}
  <div class="card">
    <div class="card-body">
      {/* <img src=></img> */}
      <h5 class="card-title">guhu</h5>
      
      <p class="card-text">bjhk</p>
      <p class="card-text">hji</p>
      {/* <a href='#'>{data.url}</a> <br /> */}
      {/* <a href="#" class="btn btn-primary">Add to booklist</a> */}
    </div>
  </div>
  {/* ))} */}


</div>
        </div>
      </div>
    </div>
  )
}
