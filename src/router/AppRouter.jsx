import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Friends from '../pages/Friends'
import Messages from '../pages/Messages'
import Settings from '../pages/Settings'
import Navbar from '../components/Navbar'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/friends' element={<Friends/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/settings' element={<Settings/>} />
    </Routes>

    </BrowserRouter>
  )
}

export default AppRouter