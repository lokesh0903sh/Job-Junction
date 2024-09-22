import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='text-center '>
        <div className='flex flex-col gap-5 my-7'>
            <span className='mx-auto px-4 py-2 rounded-full bg-gray-200 text-[#F83002] font-medium'>No.1 Job Hunt Website</span>
            <h1 className='text-5xl font-bold'>Search, Apply &  Get Your <span className='text-[#6A38c2]'>Dream Jobs</span></h1>
            <p className='w-[50%] font-light mx-auto my-3'>Our job portal is a comprehensive platform designed to bridge the gap between job seekers and employers, offering a seamless and efficient recruitment experience. With advanced technology, a user-friendly interface, and powerful search and match tools, we make finding the right job or candidate easier than ever.</p>
            <div className='flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto'>
              <input type='text' placeholder='Find your dream jobs' className='outline-none border-none w-[95%]'/>
              <Button className='rounded-r-full'>
                <Search className='h-5 w-5 '/>
              </Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection