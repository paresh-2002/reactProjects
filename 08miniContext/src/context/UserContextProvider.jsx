import UserContext from "./UserContext"
import React from 'react'
function UserContextProvider({children}) {
const [user, setUser] = React.useState()
  return (
    <UserContext.Provider value={{setUser, user}}>
        {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider