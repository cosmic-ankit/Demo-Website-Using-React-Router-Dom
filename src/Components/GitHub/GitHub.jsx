import React, { useEffect } from 'react'

import { useLoaderData } from 'react-router-dom'


function GitHub() {
    const gitInfo = useLoaderData() 
    
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/cosmic-ankit')
    //     .then(response => response.json())
    //     .then(data => {setData(data)})
        
    // })
  return (
    <div>
      
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <h1 className=' p-4 text-5xl text-center'>GitHub Profile</h1>
        Github followers: {gitInfo.followers}
        <img src={gitInfo.avatar_url} alt="Git picture" width={300} />


        
      </div>
    </div>
  )
}

export default GitHub

export const GithubInfoLoaderFunc = async()=>{
    const data = await fetch(`https://api.github.com/users/cosmic-ankit`);
    return data.json()

}
