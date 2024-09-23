import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
    {
        filterType: "Location",
        arrays: ["Delhi NCR", "Bangalore", "Gurgaon", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        arrays: ["Frontened Developer", "Backened Developer", "Graphic Designer", "AI/ML Developer", "Data Science", "Full Stack Developer","Mern Stack Developer", "Software Developer", "Software Tester"]
    },
    {
        filterType: "Salary",
        arrays: ["0-30K", "30-1Lakh", "1Lakh to 5Lakh", "5Lakh to 10Lakh"]
    }
]
const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        <hr className='mt-3'/>
        <RadioGroup>
            {
                filterData.map((data, index)=>(
                    <div>
                        <h1 className='font-bold text-lg'>{data.filterType}</h1>
                        {
                            data.arrays.map((item, index)=> {
                                return (
                                    <div className='flex items-center space-x-2 my-2'>
                                        <RadioGroupItem value={item}/>
                                        <Label>{item}</Label>
                                    </div>
                                )
                            })
                        }
                    </div>
                ))
            }
        </RadioGroup>
    </div>
  )
}

export default FilterCard