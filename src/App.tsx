// import { useState } from 'react'
import AuthLayout from './_auth/AuthLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_root/pages'
import Rootlayout from './_root/Rootlayout'
import './App.css'
import './globals.css'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
        <main className='flex h-screen'>
    <Routes>
      {/* Public Routes  */}
      <Route element={<AuthLayout/>}>
  <Route path='/sign-in' element={<SigninForm/>}/>
      <Route path='/sign-up' element={<SignupForm/>}/>
      </Route>
      
      {/* Private Routes  */}
      <Route element={<Rootlayout/>}>
      <Route index element={<Home/>}/>
      </Route>
    </Routes>
          </main>
    
  )
}

export default App
