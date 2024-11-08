import React from 'react'

const Bottom = () => {
  return (
    <div className='text-white border-t-[1px] border-[#EEE] my-4 text-sm font-normal space-y-2 sm:flex sm:items-center sm:space-y-0 sm:justify-end'>
      <h1 className='text-end mt-4 sm:mr-4'>© 2024 AWS. All rights reserved.</h1>
      <div className='flex gap-4 justify-end sm:pt-4'>
        <h1 className='underline'>Privacy Policy</h1>
        <h1 className='underline'>Terms of Use</h1>
        <h1 className='underline'>Cookie Preferences</h1>  
      </div>
    </div>
  )
}

export default Bottom