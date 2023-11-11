import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai"
import { AiFillInfoCircle } from 'react-icons/ai'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'


function Header() {
    return (
        <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>

            <div className='flex'>
                <MenuItem title='HOME' addres='/' Icon={AiFillHome} />
                <MenuItem title='ABOUT' addres='/about' Icon={AiFillInfoCircle} />
            </div>
            <div className='flex items-center space-x-5'>
                <DarkModeSwitch />
                <Link href='/'>
                    <h2 className='text-2xl'>
                        <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDB</span>
                        <span className='text-xl hidden sm:inline'>Clone</span>
                    </h2>
                </Link>
            </div>

        </div>
    )
}

export default Header