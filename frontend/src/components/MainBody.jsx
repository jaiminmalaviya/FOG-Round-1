import React, { useState } from 'react'
import Navbar from './Navbar'
import SoldierPage from './SoldierPage'

const MainBody = () => {
   const [activeLink, setActiveLink] = useState('')

   const handleLinkClick = (link) => setActiveLink(link)

   return (
      <div className="mx-[5.5rem] w-full pl-8 pt-2 pr-5">
         <Navbar
            activeLink={activeLink}
            handleLinkClick={handleLinkClick}
         />
         <div className="w-full">{activeLink === '/soldier' && <SoldierPage />}</div>
      </div>
   )
}

export default MainBody
