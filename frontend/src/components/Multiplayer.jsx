import React, { useState, useEffect } from 'react'
import QUICKMATCH from '../assets/multiplayer/1.png'
import SQUADJOIN from '../assets/multiplayer/2.png'
import SERVERBROWSER from '../assets/multiplayer/3.png'
import TESTRANGE from '../assets/multiplayer/4.png'

const imageMap = {
   QUICKMATCH,
   SQUADJOIN,
   SERVERBROWSER,
   TESTRANGE,
}

const Multiplayer = () => {
   const [multiplayerData, setMultiplayerData] = useState(null)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('http://localhost:5000/api/multiplayer')
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
      <div className="relative mt-24 flex gap-x-1">
         {multiplayerData.map((option, index) => (
            <div
               key={index}
               className="w-[210px] h-[294px]"
            >
               <div className="h-[174px] relative">
                  <div className="bg-[#101010]/30 w-full h-full absolute"></div>
                  <img
                     src={imageMap[option.image]}
                     alt={`${option.title} Image`}
                  />
               </div>
               <div className="mt-4 px-[14px]">
                  <h3 className="text-white text-[28px] font-bold  uppercase tracking-wide">
                     {option.title}
                  </h3>
                  <p>{option.data}</p>
               </div>
            </div>
         ))}
      </div>
   )
}

export default Multiplayer
