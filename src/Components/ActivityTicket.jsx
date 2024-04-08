import React from 'react'

export default function ActivityTicket() {

    const Facilities =[
        {label:'Pool', icon:"assets/SwimmingPool.svg" },
        {label:'Bar', icon:"assets/Wine.svg" },
    ]

  return (
    <div className="flex w-full">
        <div className="flex flex-col items-center gap-5 bg-white p-3 w-full md:flex-row md:p-5">
            <div className="relative">
                <img src="assets/Vector.svg" alt="" className="absolute top-1/2 left-5 h-5 w-5" />
                <img src="assets/Hotel.png" alt="" className="h-40 w-40" />
                <img src="assets/Vector.svg" alt="" className="absolute top-1/2 right-5 h-5 w-5" />
            </div>
            <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">The Museum of Modern Art</h2>
                        <p className="text-xs font-semibold text-darkGray">Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafe and The Modern Restaurant</p>
                        <div className="flex gap-5">
                            <div className="flex items-align gap-1">
                                <img src="assets/MapPin.svg" alt="" className="w-5 h-5" />
                                <a href="#" className="text-faintBlue font-semibold text-sm">Direction</a>
                            </div>
                            <div className="flex items-align gap-1">
                                <img src="assets/Star.svg" alt="" className="w-5 h-5" />
                                <a href="#" className="text-darkGray font-semibold text-sm">8.5 (436)</a>
                            </div>
                            <div className="flex items-align gap-1">
                                <img src="assets/Bed.svg" alt="" className="w-5 h-5" />
                                <a href="#" className="text-darkGray font-semibold text-sm">1 Hour</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center">
                            <img src="assets/CurrencyNgn.svg" alt="" className="h-5 w-5" />
                            <h2 className="font-bold text-xl">123,450.00</h2>
                        </div>
                        <p className='text-xs font-semibold'>10:20 AM on Mar 19</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between w-full text-darkGray text-sm font-semibold">
                    <div className="flex text-darkGray text-sm space-x-5 font-semibold">
                        <h2>What's Included: Admission to the Empire State building </h2>
                        <a href="#" className="text-faintBlue font-semibold text-sm">See more</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-normalBlue p-1 rounded-md text-white text-xs">Day 1</span>
                        <img src="assets/CaretUpDown.svg" alt="" className="w-5 h-5" />
                    </div>
                </div><hr />
                <div className="flex items-align justify-between">
                    <div className="flex items-align space-x-5">
                        <a href="#" className="text-faintBlue font-semibold text-xs md:text-sm">Hotel details</a>
                        <a href="#" className="text-faintBlue font-semibold text-xs md:text-sm">Price details</a>
                    </div>
                    <a href="#" className="text-faintBlue font-semibold text-xs md:text-sm">Edit details</a>
                </div>
            </div>
        </div>
        <div className="bg-red-100 p-3 flex hover:bg-red-300">
            <img src="assets/X.svg" alt="" className="w-5 h-5 m-auto" />
        </div>
    </div>
  )
}