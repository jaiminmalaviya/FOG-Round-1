import React, { useState, useEffect } from 'react'
import Soldier from '../assets/soldier__look.png'
import SoldierLevel from '../assets/soldier__level.png'
import Tank_W from '../assets/soldier__top-stats/soldier__tank-white.png'
import ACW_W from '../assets/soldier__top-stats/acw-white.png'
import Engineer_W from '../assets/soldier__top-stats/engineer-white.png'
import M9_W from '../assets/soldier__top-stats/m9-white.png'
import M9_B from '../assets/soldier__top-stats/m9-black.png'
import Engineer_B from '../assets/soldier__top-stats/engineer-black.png'
import ACW_B from '../assets/soldier__top-stats/acw-black.png'
import Tank_B from '../assets/soldier__top-stats/soldier__tank-black.png'

// ProgressBar Component
const ProgressBar = ({ value, max, label }) => (
   <div className="flex items-center justify-between px-4 py-3 border-t border-white/10 group hover:bg-white hover:text-stone-950">
      <div className="text-lg font-semibold uppercase tracking-wide">{label}</div>
      {value && max && (
         <div className="text-right text-base font-semibold uppercase tracking-tight">
            {value}/{max}
            <div className="w-20 h-1.5 bg-[#101010] group-hover:bg-stone-950/40 relative overflow-hidden">
               <div
                  className="absolute top-0 left-0 h-full bg-[#ee930e]"
                  style={{ width: `${(value / max) * 100}%` }}
               ></div>
            </div>
         </div>
      )}
   </div>
)

// TopInfoCard Component
const TopInfoCard = ({
   title,
   imageSrc,
   altText,
   description,
   stats,
   height,
   width,
   imageSrcBlack,
}) => (
   <div className="group w-[17.625rem] h-[10.5rem] flex flex-col bg-stone-950/50 p-[0.58rem] text-base leading-snug tracking-wide hover:bg-white hover:text-stone-950">
      <div className="opacity-70 group-hover:opacity-100 font-semibold uppercase">{title}</div>
      <img
         className={`m-auto group-hover:hidden`}
         style={{ width: `${width}`, height: `${height}` }}
         src={imageSrc}
         alt={`${altText}-white`}
      />
      <img
         className={`m-auto hidden group-hover:block`}
         style={{ width: width, height: height }}
         src={imageSrcBlack}
         alt={`${altText}-black`}
      />
      <div className="text-lg font-semibold capitalize">{description}</div>
      <div className="opacity-50 font-semibold lowercase">{stats}</div>
   </div>
)

// SoldierStats Component
const SoldierStats = ({ stats }) => (
   <div className="flex mb-12">
      {stats.map((stat, index) => (
         <div
            className="mr-auto"
            key={index}
         >
            <div className="text-xl font-medium uppercase">{stat.name}</div>
            <div className="text-4xl font-bold">{stat.value}</div>
         </div>
      ))}
   </div>
)

// TopInfoCards Component
const TopInfoCards = ({ topStats, imagePaths }) => (
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5">
      {topStats.map((stat, index) => {
         const { white, black } = imagePaths[stat.img]
         return (
            <TopInfoCard
               key={index}
               title={stat.category.toUpperCase()}
               imageSrc={white}
               imageSrcBlack={black}
               altText={stat.name}
               description={stat.name}
               stats={stat.category === 'topClass' ? `${stat.score} score` : `${stat.kills} kills`}
               height={stat.height}
               width={stat.width}
            />
         )
      })}
   </div>
)

const SoldierPage = () => {
   const [soldierData, setSoldierData] = useState(null)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('https://fog-test-round1-backend.vercel.app/api/soldier')
            const data = await response.json()
            setSoldierData(data.data)
         } catch (error) {
            console.error('Error fetching soldier data:', error)
         }
      }

      fetchData()
   }, [])

   if (!soldierData) {
      return null
   }

   const { name, level, rank, estimatedRankUp, soldierMenu, soldierStats, soldierTopStats } =
      soldierData

   const imagePaths = {
      Tank: { white: Tank_W, black: Tank_B },
      ACW: { white: ACW_W, black: ACW_B },
      Engineer: { white: Engineer_W, black: Engineer_B },
      M9: { white: M9_W, black: M9_B },
   }

   return (
      <div className="mt-12 -ml-12 flex relative">
         <div className="relative">
            <img
               className="w-[27.375rem] relative left-12"
               src={Soldier}
               alt="Soldier"
            />
         </div>
         <div className="pt-10">
            <div className="flex gap-x-5 mb-7">
               <div className="">
                  <img
                     className="w-24 h-24"
                     src={SoldierLevel}
                     alt="SoldierLevel"
                  />
               </div>
               <div className="mt-2">
                  <div className="text-4xl font-bold">{name}</div>
                  <div className="flex items-center mt-3">
                     <div className="text-lg font-medium h-[18px] inline-flex items-center px-5 border border-white/30 mr-4">
                        {level}
                     </div>
                     <div className="text-lg font-medium tracking-wide mr-1">
                        {rank.current} / {rank.max}
                     </div>
                     <div className="opacity-50 text-lg font-medium tracking-wide">
                        - Estimated rank up in {estimatedRankUp}
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex gap-x-16 items-start">
               <div className="w-[21.25rem] border-b border-white/10">
                  {soldierMenu.map((menu, index) => (
                     <ProgressBar
                        key={index}
                        label={menu.name}
                        value={menu.current}
                        max={menu.max}
                     />
                  ))}
               </div>
               <div className="">
                  <SoldierStats stats={soldierStats} />
                  <TopInfoCards
                     topStats={soldierTopStats}
                     imagePaths={imagePaths}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default SoldierPage
