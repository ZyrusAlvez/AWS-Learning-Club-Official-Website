import React from 'react'

const Buttons = () => {
  return (
    <div className='flex gap-4 items-center'>
      <button className='py-3 px-6 border-2 border-pink hover:border-pink'>Learn</button>
      <button className='py-3 px-6'>Details</button>
      <h1 className='text-pink font-bold -ml-6'>&gt;</h1>
    </div>
  )
}

export default Buttons