import { useState } from 'react'

import './App.css'
import LandingPage from './components/LandingPage'
import SignIn from './components/SignIn'
import CreateAccount from './components/CreateAccount'
import AccountSetting from './components/AccountSetting'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
 const route = createBrowserRouter([
  {
    path:'/',
    element:<LandingPage></LandingPage>
  },
  {
    path:'/signin',
    element:<SignIn></SignIn>
  },
  {
    path:'/createaccount',
    element:<CreateAccount></CreateAccount>
  },
  {
    path:'/accountsetting',
    element:<AccountSetting></AccountSetting>
  }
 ])
  return (
    <>
      
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
