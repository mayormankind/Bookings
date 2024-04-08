import React from 'react'

export default function Sidebar() {

  const Bars = [
    {label:'Activities'},
    {label:'Hotels'},
    {label:'Flights'},
    {label:'Study'},
    {label:'Visa'},
    {label:'Immigration'},
    {label:'Medical'},
    {label:'Vacation Packages'},
  ]
  return (
    <div className='hidden bg-white space-y-10 p-5 w-1/6 font-medium md:block'>
      <div className='flex flex-col'>
        {Bars.map((bar,id)=>(
          <div className="flex space-x-2 text-xs p-3 hover:bg-lightGray" key={id}>
            <h3>{bar.label}</h3>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center space-x-3 bg-lightGray">
        <p className="text-white font-bold p-1 bg-faintBlue text-align">GO</p>
        <p className="text-xs">Personal Account</p>
        <img src="assets/CaretUpDown.svg" alt="" className="h-3 w-3" />
      </div>
    </div>
  )
}
