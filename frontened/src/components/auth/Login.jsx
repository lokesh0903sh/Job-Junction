import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { RadioGroup} from '../ui/radio-group'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password:"",
        role:"",
    });

    const changeEventHAndler = (e)=>{
        setInput({...input, [e.target.name]:e.target.value});
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
                    <h1 className='font-bold text-xl mb-5 text-center'>Login</h1>
                    <div className='my-2'>
                        <Label >Email</Label>
                        <Input type="email" value={input.email} name="email" onChange={changeEventHAndler} placeholder="e.g. Lokesh@gmail.com" />
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
                                    checked={input.role === "student"}
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
                    </div>
                    <Button type="submit" className="w-full my-6 ">Login</Button>
                    <span className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login