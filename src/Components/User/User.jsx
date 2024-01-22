import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {UserID} = useParams()
  return (
    <div className='bg-slate-500 text-center text-white text-7xl p-8' > 
      User :{UserID}
    </div>
  )
}

export default User
