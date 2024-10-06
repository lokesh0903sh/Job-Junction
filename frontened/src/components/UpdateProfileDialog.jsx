import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useSelector } from 'react-redux';

const UpdateProfileDialog = ({open, setopen}) => {
    const [loading, setLoading] = useState(false);
    const {user} = useSelector(store => store.auth)
  return (
    <div>
        <Dialog open={open}>
            <DialogContent className="sm:max-w-[525px]" onInteractOutside={()=>setopen(false)}>
                <DialogHeader>
                    <DialogTitle>Update Profile</DialogTitle>
                </DialogHeader>
                <form>
                    <div className='grid gap-4 py-4'>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <input id="name" name="name" className='col-span-3 border border-gray-300 rounded-md'/>
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="email" className="text-right">Email</Label>
                            <input id="email" name="email" className='col-span-3 border border-gray-300 rounded-md'/>
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="number" className="text-right">Number</Label>
                            <input id="number" name="number" className='col-span-3 border border-gray-300 rounded-md'/>
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="bio" className="text-right">Bio</Label>
                            <input id="bio" name="bio" className='col-span-3 border border-gray-300 rounded-md'/>
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="skills" className="text-right">Skills</Label>
                            <input id="skills" name="skills" className='col-span-3 border border-gray-300 rounded-md'/>
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="file" className="text-right">Resume</Label>
                            <input id="file" name="file" type='file' accept='application/pdf' className='col-span-3 border border-gray-300 rounded-md'/>
                        </div>
                    </div> 
                    <DialogFooter>
                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin'/>Please wait</Button> : <Button type="submit" className="w-full my-4">Update</Button>
                    }
                    </DialogFooter> 
                </form>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default UpdateProfileDialog