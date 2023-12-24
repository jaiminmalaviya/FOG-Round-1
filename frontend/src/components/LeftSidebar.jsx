import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BattlefieldV from '../assets/side-menu/side-menu__game.png'
import Battlefield1 from '../assets/side-menu/side-menu__game (1).png'
import Battlefield4 from '../assets/side-menu/side-menu__game (2).png'
import BattlefieldHardline from '../assets/side-menu/side-menu__game (3).png'
import Career from '../assets/side-menu/side-menu__career.png'
import Watch from '../assets/side-menu/side-menu__watch.svg'
import News from '../assets/side-menu/side-menu__news.svg'
import Help from '../assets/side-menu/side-menu__help.svg'
import Quit from '../assets/side-menu/side-menu__quit.svg'

const sidebarLinks = [
   {
      to: '/battlefieldV',
      src: BattlefieldV,
      alt: 'Battlefield V',
      width: '2.5rem',
      height: 12,
      marginBottom: '1rem',
   },
   {
      to: '/battlefield1',
      src: Battlefield1,
      alt: 'Battlefield 1',
      width: '2.5rem',
      height: 12,
      marginBottom: '1rem',
   },
   {
      to: '/battlefield4',
      src: Battlefield4,
      alt: 'Battlefield 4',
      width: '2.5rem',
      height: 12,
      marginBottom: '1rem',
   },
   {
      to: '/battlefieldHardline',
      src: BattlefieldHardline,
      alt: 'Battlefield Hardline',
      width: '2.5rem',
      height: 12,
      marginBottom: '1rem',
   },
   {
      to: '/career',
      src: Career,
      alt: 'Career',
      width: '2.5rem',
      height: 10,
      marginBottom: '1.5rem',
   },
   { to: '/watch', src: Watch, alt: 'Watch', width: '2rem', height: 8, marginBottom: '1.5rem' },
   { to: '/news', src: News, alt: 'News', width: '2rem', height: 8, marginBottom: '1.5rem' },
   { to: '/help', src: Help, alt: 'Help', width: '1.5rem', height: 6, marginBottom: '1.5rem' },
   { to: '/quit', src: Quit, alt: 'Quit', width: '1.25rem', height: 5, marginBottom: 0 },
]

const SidebarLink = ({ to, src, alt, width, height, marginBottom, isActive }) => {
   return (
      <Link
         to={to}
         className={`flex items-center group opacity-50 hover:opacity-100 ${
            isActive ? 'opacity-80' : ''
         }`}
         style={{ marginBottom: `${marginBottom}` }}
      >
         {isActive && (
            <div
               className={`h-${height} min-h-8 absolute left-0 border-l-[3px] border-amber-500`}
            ></div>
         )}
         <img
            style={{ width: width }}
            className={`h-${height} mx-auto`}
            src={src}
            alt={alt}
         />
         <div className="w-max px-2 py-px hidden group-hover:block bg-stone-950 absolute left-[90%]">
            <div className="text-center text-white text-base font-medium font-rajdhani uppercase tracking-wide">
               {alt}
            </div>
         </div>
      </Link>
   )
}

const LeftSidebar = () => {
   const [activeLink, setActiveLink] = useState('/battlefieldV')
   const location = useLocation()
   const [initialLoad, setInitialLoad] = useState(true)

   useEffect(() => {
      // Set activeLink only on initial load
      if (initialLoad) {
         setInitialLoad(false)
      } else {
         setActiveLink(location.pathname)
      }
   }, [location.pathname])

   return (
      <div className="flex flex-col fixed justify-between h-full w-[5.5rem] items-center border-r-[1px] left-0 border-white border-opacity-20 pr-1.5">
         <div className="mt-[17vh] ">
            {sidebarLinks.slice(0, -2).map((link) => (
               <SidebarLink
                  key={link.to}
                  {...link}
                  isActive={activeLink === link.to}
               />
            ))}
         </div>
         <div className="mb-[5vh]">
            {sidebarLinks.slice(-2).map((link) => (
               <SidebarLink
                  key={link.to}
                  {...link}
                  isActive={activeLink === link.to}
               />
            ))}
         </div>
      </div>
   )
}

export default LeftSidebar
