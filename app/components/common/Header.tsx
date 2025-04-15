import Image from 'next/image'
import React from 'react'
import {assets} from '@/public/assets/assets'

const Header = () => {
  return (
    <header className='absolute top-0 z-50 w-full'>
        <div className="container flex items-center  justify-between">
            <div>
                <Image src={assets.logo} alt="logo" width={100}/>
            </div>
            <div>
              <ul className='flex gap-5'>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Gallery</a></li>
                <li><a href="">Career</a></li>
                <li><a href="">News</a></li>
                <li><a href="">CONTACT Us</a></li>
                <li><a href="">Download</a></li>
              </ul>
            </div>
        </div>
    </header>
  )
}

export default Header