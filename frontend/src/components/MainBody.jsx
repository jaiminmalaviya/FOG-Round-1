import React, { useState } from 'react'
import Navbar from './Navbar'
import SoldierPage from './SoldierPage'
import Multiplayer from './Multiplayer'

const MainBody = () => {
   const [activeLink, setActiveLink] = useState('')

   const handleLinkClick = (link) => setActiveLink(link)

   console.log(activeLink)

   return (
      <div className="mx-[5.5rem] w-full pl-8 pt-2 pr-5">
         <Navbar
            activeLink={activeLink}
            handleLinkClick={handleLinkClick}
         />
         <div className="w-full">{activeLink === '/soldier' && <SoldierPage />}</div>
         <div className="w-full">{activeLink === '/multiplayer' && <Multiplayer />}</div>
      </div>
   )
}

export default MainBody
