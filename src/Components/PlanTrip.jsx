import React from 'react'
import FlightTicket from './FlightTicket';
import HotelTicket from './HotelTicket';
import ActivityTicket from './ActivityTicket';

export default function PlanTrip() {
  return (
    <div className='bg-white w-full flex flex-col p-3 md:w-5/6 gap-2 md:p-5'>
        <div className="relative flex justify-between">
            <img src="assets/banner.png" alt="" className="img" />
            <img src="assets/ArrowLeft.svg" alt="" className="absolute top-5 left-5 h-5 w-5" />
        </div>
        <div className="flex flex-col">
            <div className="flex justify-between">
                <div className="bg-lightBrown p-1 flex space-x-1 items-center w-fit text-darkBrown">
                    <img src="assets/CalendarBlank.svg" alt="" className="w-3 h-3" />
                    <span className='text-xs font-bold'>21 March 2024 - 27 March 2024</span>
                </div>
                <div className="flex space-x-1 items-center">
                    <div className="bg-skyBlue px-4 py-2 md:px-10">
                        <img src="assets/UserPlus.svg" alt="" className="w-4"/>
                    </div>
                    <img src="assets/DotsThree.png" alt="" className="w-5 h-5"/>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h2 className="text-black text-lg font-bold">Bahamas Family Trip</h2>
                    <p className="text-darkGray text-xs">New York, United state of America | Solo Trip</p>
                </div>
                <div className="flex items-center">
                    <img src="assets/box.svg" alt="" className="h-8 w-8" />
                    <img src="assets/xx.svg" alt="" className="h-14 w-14" />
                </div>
            </div>
            <div className="flex flex-col mt-5 gap-1 md:flex-row">
                <div className="flex flex-col bg-deepBlue p-5 gap-3 rounded-sm max-w-60 text-white">
                    <h2 className="font-bold text-md">Activities</h2>
                    <p className='text-xs'>Build, personalize and optimize your iterenaries with our trip planner.</p>
                    <button className="bg-faintBlue p-2 text-sm font-semibold  mt-5 rounded-sm">Add Activities</button>
                </div>
                <div className="flex flex-col bg-skyBlue p-5 gap-3 rounded-sm max-w-60 text-black">
                    <h2 className="font-bold text-md">Hotels</h2>
                    <p className='text-xs'>Build, personalize and optimize your iterenaries with our trip planner.</p>
                    <button className="bg-faintBlue p-2 text-sm font-semibold  mt-5 text-white rounded-sm">Add Hotels</button>
                </div>
                <div className="flex flex-col bg-faintBlue p-5 gap-3 rounded-sm max-w-60 text-white">
                    <h2 className="font-bold text-md">Flights</h2>
                    <p className='text-xs'>Build, personalize and optimize your iterenaries with our trip planner.</p>
                    <button className="bg-white text-faintBlue text-sm font-semibold  mt-5 p-2 rounded-sm">Add Flights</button>
                </div>
            </div>
        </div>

        <div className="flex flex-col mt-10 gap-5">
            <div className="flex flex-col">
                <h2 className="text-black text-lg font-bold">Trip itinenaries</h2>
                <p className="text-darkGray text-xs">Your trip itineraries are placed here</p>
            </div>

            {/* Flights */}
            <div className="bg-lightGray flex flex-col gap-5 p-3 rounded-sm md:p-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-black gap-2">
                        <img src="assets/AirplaneInFlight.svg" alt="" className="w-5 h-5" />
                        <h2 className="font-bold">Flights</h2>
                    </div>
                    <button className="bg-white text-faintBlue rounded-sm text-xs p-2 font-bold hover:outline-faintBlue">Add Flights</button>
                </div>
                <FlightTicket/>
                <FlightTicket/>
            </div>

            {/* Hotels */}
            <div className="bg-darkGrayBlue flex flex-col gap-5 p-3 rounded-sm md:p-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-white gap-2">
                        <img src="assets/AirplaneInFlight.svg" alt="" className="w-5 h-5 text-white" />
                        <h2 className="font-bold">Hotels</h2>
                    </div>
                    <button className="bg-white text-black rounded-sm text-xs p-2 font-bold hover:outline-black">Add Flights</button>
                </div>
                <HotelTicket/>
                <HotelTicket/>
            </div>

            {/* Activities */}
            <div className="bg-faintBlue flex flex-col gap-5 p-3 rounded-sm md:p-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-white gap-2">
                        <img src="assets/RoadHorizon.svg" alt="" className="w-5 h-5 text-white" />
                        <h2 className="font-bold">Activities</h2>
                    </div>
                    <button className="bg-white text-faintBlue rounded-sm text-xs p-2 font-bold hover:outline-faintBlue">Add Activities</button>
                </div>
                <ActivityTicket/>
                <ActivityTicket/>
            </div>
        </div>


    </div>
  )
}
