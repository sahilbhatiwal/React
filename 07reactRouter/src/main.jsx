import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import GitHub, { githubUserInfo } from './Components/GitHub/GitHub.jsx'

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element = {<Layout/>} >
      <Route path ="" element = {<Home/>} />
      <Route path ="about" element = {<About/>} />
      <Route path ="contact" element = {<Contact/>} />
      <Route path ="user/:userId" element = {<User/>} />
      <Route loader = {githubUserInfo}
      path ="github/:userName" element = {<GitHub/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {route} />
  </StrictMode>,
)
