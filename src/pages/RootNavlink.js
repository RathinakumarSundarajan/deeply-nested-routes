import React from 'react'
import { Outlet } from 'react-router-dom'
//-----------------------------------------------------------
import MainNavigation from '../navbar/MainNavigation'


const RootNavlink = () => {
  return (
    <div>
      <MainNavigation/>
      <main>
        <Outlet/>
      </main>     
    </div>
  )
}

export default RootNavlink
