import React from 'react'

export default function FlightTicket() {

    const Facilities =[
        {label:'Baggage: 20kg, Cabin Baggage: 8kg', icon:"assets/Bed.svg" },
        {label:'In flight entertainment', icon:"assets/Bed.svg" },
        {label:'In flight mea', icon:"assets/Bed.svg" },
        {label:'USB port', icon:"assets/Bed.svg" },
    ]

  return (
    <div className="flex">
        <div className="flex flex-col bg-white p-3 w-full gap-5 md:p-5">
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                <div className="flex items-center gap-5">
                    <img src="assets/Group.svg" alt="" className="h-5 w-5" />
                    <div className="flex flex-col">
                        <h2 className="font-bold text-lg">American Airlines</h2>
                        <div className="flex items-center gap-5">
                            <h2 className="text-sm text-darkGray">AA-829</h2>
                            <span className="bg-normalBlue p-1 rounded-md text-white text-xs">First Class</span>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-between md:w-fit md:justify-around md:gap-5">
                    <div className="text-right gap-5">
                        <h2 className="text-xl font-bold">08:35</h2>
                        <span className="text-darkGray font-semibold text-xs">Sun, 20 Aug</span>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                            {/* <img src="assets/CurrencyNgn.svg" alt="" className="h-10 w-10" /> */}
                            <span className="text-xs text-darkGray">Duration: 1h 45m</span>
                        </div>
                    </div>
                    <div className="text-left gap-5">
                        <h2 className="text-xl font-bold">09:55</h2>
                        <span className="text-darkGray font-semibold text-xs">Sun, 20 Aug</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src="assets/CurrencyNgn.svg" alt="" className="h-5 w-5" />
                    <h2 className="font-bold text-xl">123,450.00</h2>
                </div>
            </div><hr />
            <div className="flex text-darkGray text-sm space-x-5 font-semibold flex-wrap">
                <h2>Facilities: </h2>
                {Facilities.map((facility,id)=>(
                    <div className="flex items-center gap-1" key={id}>
                        <img src={facility.icon} alt="" className="w-5 h-5" />
                        <span>{facility.label}</span>
                    </div>
                ))}
            </div><hr />
            <div className="flex items-align justify-between">
                <div className="flex items-align space-x-5">
                    <a href="#" className="text-faintBlue font-semibold text-xs md:text-sm">Flight details</a>
                    <a href="#" className="text-faintBlue font-semibold text-xs md:text-sm">Price details</a>
                </div>
                <a href="#" className="text-faintBlue font-semibold text-xs md:text-sm">Edit details</a>
            </div>
        </div>
        <div className="bg-red-100 p-3 flex hover:bg-red-300">
            <img src="assets/X.svg" alt="" className="w-5 h-5 m-auto" />
        </div>
    </div>
  )
}
