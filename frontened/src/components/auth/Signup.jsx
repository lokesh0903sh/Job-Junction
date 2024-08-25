import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { RadioGroup} from '../ui/radio-group'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const changeEventHAndler = (e)=>{
        setInput({...input, [e.target.name]:e.target.value});
    }

    const changeFileHandler = (e) =>{
        setInput({...input, file:e.target.files?.[0]});
    }

    const submitHandler = async (e)=>{
        e.preventDefault();
        console.log(input); 
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto mt-3'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5 text-center'>SignUp</h1>
                    <div className='my-2'>
                        <Label >Full Name</Label>
                        <Input type="text" value={input.fullname} name="fullname" onChange={changeEventHAndler} placeholder="e.g. Lokesh" />
                    </div>
                    <div className='my-2'>
                        <Label >Email</Label>
                        <Input type="email" value={input.email} name="email" onChange={changeEventHAndler} placeholder="e.g. Lokesh@gmail.com" />
                    </div>
                    <div className='my-2'>
                        <Label >Phone Number</Label>
                        <Input type="number" value={input.phoneNumber} name="phoneNumber" onChange={changeEventHAndler} placeholder="e.g. +91 1234567891" />
                    </div>
                    <div className='my-2'>
                        <Label >PassWord</Label>
                        <Input type="password" value={input.password} name="password" onChange={changeEventHAndler} placeholder="xxxxxxxxxx" />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center space-x-2">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHAndler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">   
                            <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHAndler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className="flex items-center gap-2">
                            <Label>Profile</Label>
                            <Input accept="image/*" type="file" onChange={changeFileHandler} className="cursor-pointer" />
                        </div>
                    </div>
                    <Button type="submit" className="w-full my-6">Signup</Button>
                    <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Signup