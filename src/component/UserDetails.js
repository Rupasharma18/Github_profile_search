import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Profile from './Profile.js'
import Repos from './repos'
const UserDatail =({match})=>{
const [profileData, setProfileData] = useState({})
const [repos, setRepos] = useState([])

useEffect(()=>{
    Axios.get(`https://api.github.com/users/${match.params.username}/repos`).then(res=>{
        setRepos(res.data)
    })

    Axios.get(`https://api.github.com/users/${match.params.username}`).then(res=>{
        setProfileData(res.data)
    })
}, [])



return(<div className='container mt-5'>  
    <Profile proData={profileData}/>
    <h3 className='page-heading mb-3 mt-3'>Latest Repos</h3>
      {repos.map(repo => (
        <Repos key={repo.id} repo={repo} />
      ))}
</div>);
}
export default UserDatail;