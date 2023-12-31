'use client'
import React from 'react'
import { Card, Typography } from '@material-tailwind/react'
import Link from 'next/link'
// import { Pagination } from '../components/layout'

const TABLE_HEAD = [
  'No',
  'Jumlah Pria',
  'Jumlah Wanita',
  'Status',
  'Keterangan',
  'Options',
]

const TABLE_ROWS = [
  {
    id: 1,
    jumlahPria: 524,
    jumlahWanita: 315,
    status: 'Terdaftar',
    keterangan: 'Oktober 2023',
  },
  {
    id: 2,
    jumlahPria: 8,
    jumlahWanita: 5,
    status: 'Dalam Proses Pengajuan',
    keterangan: 'Oktober 2023',
  },
  {
    id: 3,
    jumlahPria: 224,
    jumlahWanita: 115,
    status: 'Terdaftar',
    keterangan: 'November 2023',
  },
]

const dtks = () => {
  return (
    <main className='mx-auto max-w-screen-2xl px-1 py-2 lg:py-4'>
      <h1 className='py-4 text-xl text-center font-bold uppercase'>
        Data Terpadu Kesejahteraan Sosial - DTKS
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
              ({ id, jumlahPria, jumlahWanita, status, keterangan }, index) => (
                <tr key={id} className='even:bg-blue-gray-50/50'>
                  <td className='p-4 w-8'>
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
                      {jumlahPria}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal text-center'
                    >
                      {jumlahWanita}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal text-center'
                    >
                      {status}
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

      {/* <div className='mx-2 py-4 flex justify-center'>
        <Pagination />
      </div> */}
    </main>
  )
}

export default dtks
