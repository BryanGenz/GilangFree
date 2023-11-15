'use client'
import React from 'react'
import Image from 'next/image'
import { Input, Button } from '@material-tailwind/react'
import logoKel from '@/public/Logo-kel.jpg'

const Login = () => {
  return (
    <div className='h-8/12 w-80 bg-blue-200 rounded-md'>
      <div className='relative flex justify-center mt-8 lg:mb-4'>
        <Image
          src={logoKel}
          alt='logo'
          width={100}
          height={100}
          className='rounded-md'
        />
      </div>

      <div className='text-center'>
        <h1 className='text-3xl font-bold uppercase tracking-wider'>sikadal</h1>
        <h2 className='text-lg capitalize'>sistem keamanan data lapangan</h2>
        <h3 className='text-xl capitalize font-semibold'>
          Seksi Kesejahteraan Sosial
        </h3>
        <h4 className='text-sm capitalize'>
          kelurahan lebakgede - kecamatan coblong
        </h4>
        <h2 className='text-lg capitalize'>kota Bandung</h2>
      </div>

      <form className='space-y-4 flex flex-col justify-center items-center my-8'>
        <div className='w-72'>
          <Input
            label='Username'
            type='text'
            crossOrigin={undefined}
            className='bg-gray-200'
          />
        </div>
        <div className='w-72'>
          <Input
            label='Password'
            type='password'
            crossOrigin={undefined}
            className='bg-gray-200'
          />
        </div>
        <Button className='w-11/12'>Button</Button>
      </form>
    </div>
  )
}

export default Login
