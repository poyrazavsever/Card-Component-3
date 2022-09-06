import React from 'react'

function AuthorAbout({imageLink, name, job, desc}) {
  return (
    <div className='flex flex-col justify-center items-start gap-3 w-5/6 sm:w-1/2 lg:w-80 bg-white px-12 py-6 border border-gray-600 rounded-lg'>
        <img src={imageLink} alt="profileImage" className='w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full'/>
        <h1 className='text-lg sm:2xl lg:columns-3xl font-semibold'>{name}</h1>
        <h4 className='text-sm sm:text-base lg:text-lg font-medium text-gray-700'>{job}</h4>
        <p className='text-xs sm:text-sm lg:text-base'>{desc}</p>
    </div>
  )
}

export default AuthorAbout