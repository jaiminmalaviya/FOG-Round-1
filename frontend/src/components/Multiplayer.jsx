import React, { useState, useEffect } from 'react'
import QUICK_MATCH from '../assets/multiplayer/1.png'
import SQUAD_JOIN from '../assets/multiplayer/2.png'
import SERVER_BROWSER from '../assets/multiplayer/3.png'
import TEST_RANGE from '../assets/multiplayer/4.png'

const imageMap = {
   QUICK_MATCH,
   SQUAD_JOIN,
   SERVER_BROWSER,
   TEST_RANGE,
}

const Multiplayer = () => {
   const [multiplayerData, setMultiplayerData] = useState(null)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('https://fog-round-1-backend.vercel.app/api/multiplayer')
            const data = await response.json()
            setMultiplayerData(data.data)
         } catch (error) {
            console.error('Error fetching multiplayer data:', error)
         }
      }

      fetchData()
   }, [])

   if (!multiplayerData) {
      return null
   }

   return (
      <div className="relative mt-16 flex gap-x-1 flex-wrap">
         {multiplayerData.map((option, index) => (
            <div
               key={index}
               className="group w-[210px] h-[294px] flex flex-col overflow-hidden"
            >
               <div className="h-[174px] relative overflow-hidden">
                  <div className="bg-[#101010]/30 w-full h-full absolute z-10"></div>
                  <img
                     src={imageMap[option.image]}
                     alt={`${option.title} Image`}
                     className="h-[182px] group-hover:-translate-y-2 transition-transform"
                  />
               </div>
               <div className="pt-4 px-4 flex-grow bg-[#101010]/50 group-hover:bg-white group-hover:text-black transition-all z-10">
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-1">
                     {option.title}
                  </h3>
                  <p className="opacity-50 text-xs font-semibold pr-4 tracking-wide">
                     {option.data}
                  </p>
               </div>
            </div>
         ))}
      </div>q
   )
}

export default Multiplayer
