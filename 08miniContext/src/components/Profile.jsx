import React from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = React.useContext(UserContext)
  if(!user) return <div>Please Login</div>
   if(user) return <h2>Welcome : {user}</h2>
 
}

export default Profile