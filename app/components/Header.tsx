import React from 'react'

import icon from "../../public/headericons/Icon.svg"
import notification from "../../public/headericons/notification.svg"
import light from "../../public/headericons/light.svg"
import search from "../../public/headericons/search.svg"
import star from "../../public/headericons/star.svg"
import timer from "../../public/headericons/timer.svg"
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
   return (
        <header className='hidden md:flex items-center justify-between rounded-xl px-6 py-4 mb-2 bg-gray-100 border-b border-gray-100'>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                    <button className='p-1 md:w-8  hover:bg-gray-100 rounded-md transition-colors'>
                        <Image src={icon} alt="menu" width={20} height={20} />
                    </button>
                    <button className='p-1 md:w-8 hover:bg-gray-100 rounded-md transition-colors'>
                        <Image src={star} alt="favorite" width={20} height={20} />
                    </button>
                </div>
                
                <nav className='flex items-center text-sm'>
                    <span className="text-gray-400">Dashboards</span>
                    <span className="mx-2 text-gray-300">/</span>
                    <span className="text-gray-900 font-medium">Overview</span>
                </nav>
            </div>

            <div className='flex items-center gap-4'>
                {/* Search Bar */}
                <div className='relative flex items-center bg-gray-200 px-3 py-1.5 rounded-lg border border-gray-200 focus-within:ring-1 focus-within:ring-blue-500'>
                    <Image src={search} alt="search" width={16} height={16} className="opacity-50" />
                    <input 
                        type='search' 
                        placeholder='Search' 
                        className='bg-transparent border-none outline-none text-sm ml-2 w-40 focus:ring-0'
                       
                    /> <span><Link href='#'><Image src = '/Text.svg' height={16} width={20} alt='/'/></Link></span>
                </div>

                <div className='flex items-center gap-1'>
                    <button className='p-2 md:w-10  hover:bg-gray-100 rounded-lg transition-colors'>
                        <Image src={light} alt="theme" width={20} height={20} />
                    </button>
                    <button className='p-2 md:w-10 hover:bg-gray-100 rounded-lg transition-colors'>
                        <Image src={timer} alt="history" width={20} height={20} />
                    </button>
                    <button className='p-2 md:w-10 hover:bg-gray-100 rounded-lg transition-colors'>
                        <Image src={notification} alt="notifications" width={20} height={20} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
