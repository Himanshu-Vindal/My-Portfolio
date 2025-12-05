import React from 'react'
import { Outlet } from "react-router-dom";

import Footer from './Footer';
import Navbar from './Navbar';

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