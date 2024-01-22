import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'


 function App() {
  const [count, setCount] = useState(0)

  return (
    
<>
<Header/>
<Outlet/> 
<Footer/>

{/* Outlet is a method in a react router dom, which contains the component which will chnage according to the change in route */}
</>
  )
}

export default App
