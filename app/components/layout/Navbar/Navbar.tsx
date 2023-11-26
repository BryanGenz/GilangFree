'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Spinner,
} from '@material-tailwind/react'
import Image from 'next/image'

import logo1 from '@/public/LANRI.png'
import useAuth from '@/app/hooks/useAuth'
import SignOutButton from '../../SignOutButton'

export default function NavbarDefault() {
  const [openNav, setOpenNav] = useState(false)
  const { loading, loggedIn } = useAuth()

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <Link href='/pkk' className='flex items-center'>
          PKK
        </Link>
      </Typography>

      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <Link href='/karang-taruna' className='flex items-center'>
          Karang Taruna
        </Link>
      </Typography>

      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <Link href='/dtks' className='flex items-center'>
          DTKS
        </Link>
      </Typography>

      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <Link href='/tempat-pendidikan' className='flex items-center'>
          Tempat Pendidikan
        </Link>
      </Typography>

      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <Link href='/tempat-ibadah' className='flex items-center'>
          Tempat Ibadah
        </Link>
      </Typography>

      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <Link href='/lpm' className='flex items-center'>
          LPM
        </Link>
      </Typography>
    </ul>
  )

  return (
    <Navbar className='mx-auto max-w-screen-2xl px-4 py-2 lg:px-8 lg:py-4 bg-blue-200 '>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        <Typography as='div' className='mr-4 cursor-pointer py-1.5 font-medium'>
          <Link href='/'>
            <Image
              src={logo1}
              width={80}
              height={35}
              alt='logo'
              className='rounded-md w-auto h-auto'
              priority
            />
          </Link>
        </Typography>
        <div className='hidden lg:block'>{navList}</div>

        {loggedIn ? (
          <div className='flex items-center gap-x-1'>
            <SignOutButton>
              <Button
                variant='gradient'
                size='sm'
                className='hidden lg:inline-block'
              >
                <h1>Log Out</h1>
              </Button>
            </SignOutButton>
          </div>
        ) : loading ? (
          <Spinner />
        ) : (
          <div className='flex items-center gap-x-1'>
            {/* <Button variant='text' size='sm' className='hidden lg:inline-block'>
            <span>Log In</span>
          </Button> */}
            <Button
              variant='gradient'
              size='sm'
              className='hidden lg:inline-block'
            >
              <Link href='/auth/signup'>Sign Up</Link>
            </Button>
          </div>
        )}

        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <div className='container mx-auto'>
          {navList}
          <div className='flex items-center gap-x-1'>
            {/* <Button fullWidth variant='text' size='sm' className=''>
              <span>Log In</span>
            </Button> */}
            {loggedIn ? (
              <SignOutButton>
                <Button fullWidth variant='gradient' size='sm' className=''>
                  <span>Log Out</span>
                </Button>
              </SignOutButton>
            ) : loading ? (
              <Spinner />
            ) : (
              <Button fullWidth variant='gradient' size='sm' className=''>
                <span>Sign Up</span>
              </Button>
            )}
          </div>
        </div>
      </Collapse>
    </Navbar>
  )
}
