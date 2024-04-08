import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const navs = [
        {label: 'Home', path:'/'},
        {label: 'Dashboard', path:'/dashboard'},
        {label: 'Wallet', path:'/wallet'},
        {label: 'Plan a trip', path:'/books'},
        {label: 'Commission for life', path:'/books'},
        {label: 'Notification', path:'/books'},
        {label: 'Carts', path:'/books'},
        {label: 'Create', path:'/books'},
    ]
  return (
    <div className='w-full bg-white p-5'>
        <div className="w-full container mx-auto flex items-center justify-between">
            <div className="flex space-x-6">
                <img src="assets/logo.svg" className='rounded-md h-10 w-10' alt="Go logo"/>
                <div className="bg-slate-100 flex w-full items-center space-x-1 p-2">
                    <img src="assets/MagnifyingGlass.svg" alt="" className="h-5 w-5"/>
                    <input type="text" className="bg-transparent text-sm" name="" id="" placeholder='Search'/>
                </div>
            </div>
            <nav className="hidden md:flex space-x-5 items-center">
                <div className="flex flex-col">
                    <Link><a href="#" className='hover:text-anchorGray text-sm'>Home</a></Link>
                </div>
                <div className="flex flex-col">
                    <Link><a href="#" className='hover:text-anchorGray text-sm'>Dashboard</a></Link>
                </div>
                <div className="flex flex-col">
                    <Link><a href="#" className='hover:text-anchorGray text-sm'>Wallet</a></Link>
                </div>
                <div className="flex flex-col">
                    <Link><a href="#" className='hover:text-anchorGray text-sm'>Plan a trip</a></Link>
                </div>
                <div className="flex flex-col">
                    <Link><a href="#" className='hover:text-anchorGray text-sm'>Commission for life</a></Link>
                </div>
                <img src="assets/Line 213.svg" alt="" className=""/>
                <button className="bg-faintBlue text-white text-sm p-2 rounded-md">Subscribe</button>
                <div className="flex flex-col">
                    <Link><a href="#" className='hover:text-anchorGray text-sm'>Notification</a></Link>
                </div>
                <div className="flex flex-col">
                    <Link><a href="#" className='hover:text-anchorGray text-sm'>Cart</a></Link>
                </div>
                <div className="flex flex-col">
                    <Link><a href="#" className='hover:text-anchorGray text-sm'>Create</a></Link>
                </div>
                <div className="flex space-x-2 items-center" >
                    <img src="assets/Ellipse 775.svg" alt="" className="rounded-full h-10 w-10" />
                    <img src="assets/CaretDown.svg" alt="" className="h-5 w-5" />

                </div>
            </nav>
            <div className="flex bg-lightGray p-1 md:hidden">
                <img src="assets/X.svg" alt="" className="m-auto" />
            </div>
        </div>
      
    </div>
  )
}
