import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import PlanTrip from '../Components/PlanTrip'

export default function Home() {
  return (
    <div className='w-full bg-lightGray'>
        <Header/>
        <div className="flex justify-between w-full p-2 md:p-7 md:space-x-12 md:relative">
          <Sidebar/>
          <PlanTrip/>
        </div>
    </div>
  )
}
