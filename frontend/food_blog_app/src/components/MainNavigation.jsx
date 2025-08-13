import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Home from '../pages/Home'
import { Outlet } from 'react-router-dom'

export default function MainNavigation() {
  return (
    <div>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </div>
  )
}
