import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
  return (
    <div className='p-5 rounded-xl shadow-xl bg-white border border-gray-100'>
        <div className='flex items-center justify-between'>
            <p className='text-sm text-gray-650'>2 days ago</p>
            <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
        </div>

        <div className='flex items-center gap-2 my-2'>
            <Button variant='outline' className='w-12'>
                <Avatar>
                    <AvatarImage src='https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg'/>
                </Avatar>
            </Button>
            <div>
                <h1 className='font-medium text-lg'>company Name</h1>
                <p className='text-sm text-gray-500'>india</p>
            </div>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Title</h1>
            <p className='text-sm text-gray-600'>kjbdvbdvbdhi eir fgjkfdnvkdf hklsaevklasd ipsae,mDd weouf lk nisdhg8 skdnfbijxnjkd kjdbk  p9rjglkd  oinvksc nndvkcx </p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className='text-blue-700 font-bold ' variant="ghost">15 Positions</Badge>
            <Badge className='text-[#F83002] font-bold ' variant="ghost">Part Time</Badge>
            <Badge className='text-[#7309B7] font-bold ' variant="ghost">24LPA</Badge>
        </div>
        <div className='flex items-center gap-4 mt-4'>
            <Button variant='outline' className='border border-gray-200'>Details</Button>
            <Button className='bg-[#7209b7]'>Save For Later</Button>
        </div>
    </div>
  )
}

export default Job