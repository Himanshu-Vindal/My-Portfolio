import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
   <div className="bg-stone-950 text-stone-200 min-h-screen flex flex-col">

        <Navbar />
        <main className='flex-1'>
            <Outlet />
        </main>
        <Footer />
    
   </div>
  )
}

export default Layout