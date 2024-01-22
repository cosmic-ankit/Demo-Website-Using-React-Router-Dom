import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import AboutUs from './Components/About Us/AboutUs.jsx'
import ContactUs from './Components/Contact Us/ContactUs.jsx'
import User from './Components/User/User.jsx'
import GitHub,{GithubInfoLoaderFunc} from './Components/GitHub/GitHub.jsx'


//*********** First Way Of Routing *********** */

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: < App/>,
//     children: [
//       {
//         path:"", //Since its a home component it will exist at "/"
//         element:<Home/>
//       },
//       {
//         path:"AboutUs",
//         element:<AboutUs/>
//       },
//       {
//         path:"ContactUs",
//         element:<ContactUs/>
//       }
//     ]
      
//   }
// ])
// Now create Browser Router is a method in React which takes an array of an element that it wil route

// ******************** Second Way of Routing ****************

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element = {<Home/>}/>
    <Route path='AboutUS' element = {<AboutUs/>}/>
    <Route path='ContactUs' element = {<ContactUs/>}/>
    <Route path='User/:UserID' element = {<User/>}/>
    <Route path='Github' element = {<GitHub/>} loader = {GithubInfoLoaderFunc}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
