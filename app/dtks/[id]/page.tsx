'use client'
import React from 'react'
import { Typography } from '@material-tailwind/react'
import Image from 'next/image'
import logoImg from '@/public/logo-pemkot.png'

const TABLE_HEAD = [
  'No',
  'Jumlah',
  'Jenis Kelamin',
  'Jenis Bantuan Pernah Diterima',
  'Keterangan',
]

const TABLE_ROWS = {
  id: 1,
  jumlah: '2 Orang',
  jenisKelamin: 'Pria',
  jenisBantuan: 'Sembako',
  keterangan: 'Entah apa',
}

const dtks = () => {
  return (
    <section id='pokjaI' className='mx-auto max-w-screen-2xl px-1 py-2 lg:py-4'>
      <div className='px-2 h-[675px] w-full flex flex-col items-center justify-center bg-white'>
        <div className='w-full flex flex-row'>
          <div className='my-2 basis-2/6 flex justify-center items-center lg:basis-1/12'>
            <Image src={logoImg} width={100} height={100} alt='logo' />
          </div>
          <div className='my-2 py-4 flex flex-col justify-center items-center basis-4/6 lg:basis-11/12'>
            <h3 className='texl-xl font-bold uppercase'>
              pemerintah kota bandung
            </h3>
            <h1 className='text-2xl font-bold uppercase text-center'>
              DTKS - Berdasarkan Apps
            </h1>
          </div>
        </div>

        <table className='w-full min-w-max table-auto text-left border border-black min-h-max'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className='border border-blue-gray-100 bg-blue-gray-50 p-4'
                >
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal leading-none opacity-70 text-center'
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr
              key={TABLE_ROWS.id}
              className='border border-blue-gray-100 even:bg-blue-gray-50/50'
            >
              <td className='p-4 w-8 border-r border-blue-gray-100'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal text-center'
                >
                  {TABLE_ROWS.id}
                </Typography>
              </td>
              <td className='p-4 border-r border-blue-gray-100'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal text-center'
                >
                  {TABLE_ROWS.jumlah}
                </Typography>
              </td>
              <td className='p-4 border-r border-blue-gray-100'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal text-center'
                >
                  {TABLE_ROWS.jenisKelamin}
                </Typography>
              </td>
              <td className='p-4 border-r border-blue-gray-100'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal text-center'
                >
                  {TABLE_ROWS.jenisBantuan}
                </Typography>
              </td>
              <td className='p-4'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal text-center'
                >
                  {TABLE_ROWS.keterangan}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default dtks
