import React from 'react'

const Buttons = () => {

  function handleClick(){
    alert("Soon, We'll keep you updated ;)")
  }

  return (
    <div className='flex gap-4 items-center'>
      <button className='py-3 px-6 border-2 border-pink' onClick={handleClick}>Prev</button>
      <button className='py-3 px-6 border-2 border-pink' onClick={handleClick}>Next</button>
      <h1 className='text-pink font-bold ml-2'>&gt;</h1>
    </div>
  )
}

export default Buttons