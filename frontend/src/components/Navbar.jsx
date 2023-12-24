import React, { useEffect } from 'react'
import Logo from '../assets/level-wrapper.png'

const navLinks = [
   { to: '/', label: 'HOME' },
   { to: '/multiplayer', label: 'MULTIPLAYER' },
   { to: '/campaign', label: 'CAMPAIGN' },
   { to: '/soldier', label: 'SOLDIER' },
   { to: '/store', label: 'STORE' },
   { to: '/more', label: 'MORE' },
]

const ButtonLink = ({ to, children, isActive, onClick }) => (
   <button
      className={`opacity-80 ${
         isActive ? 'opacity-100 border-b border-white pb-1.5 font-bold' : ''
      } outline-0`}
      onClick={() => onClick(to)}
   >
      {children}
   </button>
)

const Navbar = ({ activeLink, handleLinkClick }) => {
   useEffect(() => {
      activeLink || handleLinkClick('/soldier')
   }, [])

   return (
      <div className="flex items-center mt-5">
         <div className="relative w-full">
            <ul className="flex gap-x-6 text-2xl font-medium uppercase tracking-wide">
               {navLinks.map((link) => (
                  <ButtonLink
                     key={link.to}
                     to={link.to}
                     onClick={handleLinkClick}
                     isActive={activeLink === link.to}
                  >
                     {link.label}
                  </ButtonLink>
               ))}
            </ul>
            <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] opacity-20 w-full h-0.5"></div>
         </div>
         <div className="ml-auto z-10">
            <img
               className="w-80 h-16"
               src={Logo}
               alt="Logo"
            />
         </div>
      </div>
   )
}

export default Navbar
