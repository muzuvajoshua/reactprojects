import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center
     bg-white rounded-lg shadow-lg overflow-hidden 
     w-[15rem] mx-3'>

        <div className = 'h-[13rem] w-[10rem]'>
            <img className='object-cover object-top' 
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70" alt =""/>

        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
            <p className='mt-2 text-sm text-gray-500'>100% pure Ugandan Cotton</p>
        </div>

    </div>
  )
}

export default HomeSectionCard