import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {

  return (
    <UserContextProvider>
      <h1 className="bg-green-700 text-3xl text-orange-500 p-5">Mini Context API
      <Login/>
      <Profile/>
      </h1>
      
    </UserContextProvider>
  )
}

export default App
