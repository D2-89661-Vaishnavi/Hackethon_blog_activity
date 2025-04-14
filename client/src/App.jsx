import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/signup'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <Routes>
        <>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        </>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
