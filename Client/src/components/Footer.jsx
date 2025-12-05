import React from 'react'

const Footer = () => {
  return (
   <footer className="py-6 text-center border-t border-white/10 bg-black/40">
      <p className="text-xs text-zinc-400">
        © {new Date().getFullYear()} Himanshu Vindal. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer