'use client'
import React from 'react'
import { Card, Typography } from '@material-tailwind/react'

const TABLE_HEAD = ['No', 'Nama', 'Alamat', 'Keterangan', 'Maret', 'Options']

const TABLE_ROWS = [
  {
    id: 1,
    nama: 'xxxx bin xxxxx',
    alamat: 'jl. xxxxx No. xx',
    keterangan: 'xxxxxxxx',
    maret: 'xxxx',
  },
  {
    id: 2,
    nama: 'xxxx bin xxxxx',
    alamat: 'jl. xxxxx No. xx',
    keterangan: 'xxxxxxxx',
    maret: 'xxxx',
  },
  {
    id: 3,
    nama: 'xxxx bin xxxxx',
    alamat: 'jl. xxxxx No. xx',
    keterangan: 'xxxxxxxx',
    maret: 'xxxx',
  },
]

const PlaceStudy = () => {
  return (
    <main className='mx-auto max-w-screen-2xl px-1 py-2 lg:py-4'>
      <h1 className='py-4 text-xl text-center font-bold uppercase'>
        Tempat Pendidikan
      </h1>

      <Card className='h-[675px] w-full overflow-scroll'>
        <table className='w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
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
            {TABLE_ROWS.map(
              ({ id, nama, alamat, keterangan, maret }, index) => (
                <tr key={id} className='even:bg-blue-gray-50/50'>
                  <td className='p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal text-center'
                    >
                      {id}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal text-center'
                    >
                      {nama}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal text-center'
                    >
                      {alamat}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal text-center'
                    >
                      {keterangan}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal text-center'
                    >
                      {maret}
                    </Typography>
                  </td>

                  <td className='p-4 flex justify-center'>
                    <Typography
                      as='a'
                      href='#'
                      variant='small'
                      color='green'
                      className='font-medium px-1'
                    >
                      Edit
                    </Typography>
                    <Typography
                      as='a'
                      href='#'
                      variant='small'
                      color='red'
                      className='font-medium px-1'
                    >
                      Delete
                    </Typography>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Card>
    </main>
  )
}

export default PlaceStudy
