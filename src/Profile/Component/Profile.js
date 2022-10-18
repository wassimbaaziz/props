import React from 'react'

const Profile = ({user,HandelName}) => {
  return (
    <div> 
    <span>The name is {user.FullName}</span> <br/>
    <span>Profession is {user.Profession}</span> <br/>
    <h3 onClick={()=>HandelName()} style={{color:'black',}}>Name:{user.fullName}</h3>
    <span>Biographie :{user.Bio}</span> <br/>
    <span><img src={user.image} alt="404"></img></span>

    </div>
  
)}

export default Profile