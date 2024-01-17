import React from 'react'
import './css/clients.css'
function Clients() {
  return (
    <div className='clients'>
        <div className="flex justify-center flex-col items-center gap-20">

        <h1 className='text-3xl'>Our Clients</h1>
        <img
      className=" h-[0.72%] w-[82.99%]  right-[8.51%] bottom-[14.25%] left-[8.51%] max-w-full overflow-hidden max-h-full"
      alt=""
      src="/clients.svg"
    />
        <img
      className=" h-[0.72%] w-[82.99%]  right-[8.51%] bottom-[14.25%] left-[8.51%] max-w-full overflow-hidden max-h-full"
      alt=""
      src="/clients.svg"
    />
        </div>
    </div>
  )
}

export default Clients