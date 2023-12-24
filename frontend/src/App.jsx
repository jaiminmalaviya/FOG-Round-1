// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import backgroundImageMenu from './assets/menu__background.png'
import Emblem from './assets/soldier__BFemblem.png'
import MainBody from './components/MainBody'

function App() {
   return (
      <Router>
         <div className="flex h-screen relative">
            <div
               className="w-full h-full absolute bg-cover bg-center bg-no-repeat bg-fixed "
               style={{ backgroundImage: `url(${backgroundImageMenu})` }}
            ></div>
            <div className="w-full h-full opacity-60 bg-gray-950 absolute "></div>
            <div
               className="w-[24rem] h-[24rem] absolute mix-blend-screen bg-contain top-0 right-[20vw]"
               style={{ backgroundImage: `url(${Emblem})` }}
            ></div>
            <LeftSidebar />
            <MainBody />
            <RightSidebar />
         </div>
      </Router>
   )
}

export default App
