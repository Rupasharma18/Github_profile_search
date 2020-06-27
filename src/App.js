import React, { useState } from 'react';
import Axios from 'axios';
import Search from './component/search';
import Users from  './component/user';

const App =()=>{
  const [user, setUser]= useState([])
  const [Loading , setLoading]=useState(false)
// // searchUser
const searchUser =(query)=>{
  console.log(query, 'uuuuuuuuuuuu')
  setLoading(true)
  Axios.get(`https://api.github.com/search/users?q=${query}`).then(res=>{
    console.log(res.data.items, 'data')
    setUser(res.data.items)
    setLoading(false)
  })
  
  .catch(err=>{
    console.log(err)
  })

}

  const contant=()=>{
    if(Loading){
      return(
        <div className="d-flex justify-content-center mt-5">
        <h2>Loading....</h2>
        </div>
      )
    }
    else{
      return <Users users={user}/>
    }
  }
  return(
    <div className="container">
      <Search searchUser={searchUser}/>
      {contant()}
    </div>
  )
}


export default App;
