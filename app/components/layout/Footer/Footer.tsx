'use client'
import React from 'react'
import { Typography } from '@material-tailwind/react'

const Footer = () => {
  return (
    <footer className='mt-2 lg:mt-8 mx-auto max-w-screen-2xl px-4 py-2 lg:px-8 lg:py-4 bg-blue-200 border border-white shadow-md rounded-lg overflow-hidden'>
      <Typography color='blue-gray' className='text-center font-normal'>
        &copy; 2023 GenzOnline.Dev
      </Typography>
    </footer>
  )
}

export default Footer
