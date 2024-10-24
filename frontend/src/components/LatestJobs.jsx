import React from 'react'
import LatestJobCards from './LatestJobCards'
import { useSelector } from 'react-redux';
import store from '@/redux/store';
import { motion } from 'framer-motion';

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  const {allJobs} = useSelector(store => store.job);
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold'><span className='text-[#6A38c2]'>Latest & most recent </span>Job Openings</h1>
        <div className='grid grid-cols-3 gap-4 my-5'>
            {
              allJobs.length <= 0 ? <span> No Job Available</span> : allJobs.slice(0,6).map((job)=>
                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.4 }}
                                    key={job?._id}>
                    <LatestJobCards key={job._id} job={job}/>
                  </motion.div>
                )
            }
        </div>
    </div>
  )
}

export default LatestJobs