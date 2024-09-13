import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='mx-auto w-full max-w-7xl bg-gray-600 text-white text-center text-3xl  p-4'>User: {userId}</div>
  )
}

export default User;