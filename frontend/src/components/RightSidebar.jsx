import React from 'react'
import Squad from '../assets/invite/squad.svg'
import Join from '../assets/invite/join.svg'
import Online from '../assets/invite/online.svg'
import OnlineUser from '../assets/invite/image 1.png'
import OfflineUser from '../assets/invite/image 2.png'
import Offline from '../assets/invite/offline.svg'
import Join_B from '../assets/invite/join-black.svg'

const RightSidebar = () => {
   return (
      <div className="group flex flex-col z-10 fixed pt-10 h-full w-[5.25rem] items-start right-0 pl-4 hover:w-[19rem] hover:bg-opacity-80 hover:bg-[#101010] transition-all duration-200 ease-linear">
         <div className="mb-8 group-hover:mb-4">
            <div className="hidden group-hover:block w-[18rem] opacity-10 border border-white"></div>
            <div className="my-3 flex items-center ">
               <img
                  className="w-4 h-4 mr-2"
                  src={Squad}
                  alt="Squad"
               />
               <span className="hidden group-hover:inline-block text-xl font-semibold uppercase tracking-tight -mb-1">
                  Squad
               </span>
            </div>
            <div className="group/join items-center gap-3 flex hover:bg-white cursor-pointer">
               <img
                  className="w-11 h-12 group-hover/join:hidden"
                  src={Join}
                  alt="Join"
               />
               <img
                  className="w-11 h-12 hidden group-hover/join:inline-block scale-105"
                  src={Join_B}
                  alt="Join"
               />
               <div className="hidden group-hover:inline-block text-white text-base font-semibold capitalize tracking-wide group-hover/join:text-stone-950 ">
                  Squad Join
               </div>
            </div>
         </div>
         <div className="mb-8 group-hover:mb-4">
            <div className="hidden group-hover:block w-[18rem] opacity-10 border border-white"></div>
            <div className="my-3 flex items-center">
               <img
                  className="w-4 h-4 mr-2"
                  src={Online}
                  alt="Online"
               />
               <span className="hidden group-hover:inline-block text-xl font-semibold uppercase tracking-tight -mb-1">
                  Online
               </span>
            </div>
            <div className="items-center flex group/online ">
               <div className="h-12 w-0 border-l-2 border-[#23c13a] mr-1"></div>
               <img
                  className="w-11 h-12"
                  src={OnlineUser}
                  alt="OnlineUser"
               />
               <div className="hidden group-hover:flex flex-col pl-3 w-full group-hover/online:bg-white">
                  <div className="text-white text-base font-semibold capitalize tracking-wide group-hover/online:text-stone-950">
                     MaryJane
                  </div>
                  <div className="opacity-70 text-white text-base font-semibold  capitalize tracking-wide group-hover/online:opacity-60 group-hover/online:text-stone-950">
                     Online
                  </div>
               </div>
            </div>
         </div>
         <div className="mb-8 group-hover:mb-4">
            <div className="hidden group-hover:block w-[18rem] opacity-10 border border-white"></div>
            <div className="my-3 flex items-center">
               <img
                  className="w-4 h-4 mr-2"
                  src={Offline}
                  alt="Offline"
               />
               <span className="hidden group-hover:inline-block text-xl font-semibold uppercase tracking-tight -mb-1">
                  Offline
               </span>
            </div>
            <div className="items-center flex opacity-30 group/offline hover:opacity-100">
               <div className="h-12 w-0 border-l-2 border-white mr-1"></div>
               <img
                  className="w-11 h-12"
                  src={OfflineUser}
                  alt="OfflineUser"
               />
               <div className="hidden group-hover:flex flex-col pl-3 w-full group-hover/offline:bg-white">
                  <div className="text-white text-base font-semibold capitalize tracking-wide group-hover/offline:text-stone-950">
                     420
                  </div>
                  <div className="opacity-70 text-white text-base font-semibold capitalize tracking-wide group-hover/offline:opacity-60 group-hover/offline:text-stone-950">
                     Offline
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default RightSidebar
