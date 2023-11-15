'use client'
import React from 'react'
import { Card, Typography } from '@material-tailwind/react'
import Link from 'next/link'
// import { Pagination } from '../components/layout'

const TABLE_HEAD = [
  'No',
  'Jumlah',
  'Jenis Kelamin',
  'Jenis Bantuan Pernah Diterima',
  'Keterangan',
  'Tanggal Dibuat',
  'Options',
]

const TABLE_ROWS = [
  {
    id: 1,
    Jumlah: '2 Orang',
    JenisKelamin: 'Pria',
    JenisBantuanPernahDiterima: 'Sembako',
    keterangan: 'Entah apa',
    date: '23/04/18',
  },
  {
    id: 2,
    Jumlah: '2 Orang',
    JenisKelamin: 'Pria',
    JenisBantuanPernahDiterima: 'Sembako',
    keterangan: 'Entah apa',
    date: '23/04/18',
  },
  {
    id: 3,
    Jumlah: '2 Orang',
    JenisKelamin: 'Wanita',
    JenisBantuanPernahDiterima: 'Sembako',
    keterangan: 'Entah apa',
    date: '19/09/17',
  },
  {
    id: 4,
    Jumlah: '2 Orang',
    JenisKelamin: 'Pria',
    JenisBantuanPernahDiterima: 'Sembako',
    keterangan: 'Entah apa',
    date: '24/12/08',
  },
  {
    id: 5,
    Jumlah: '2 Orang',
    JenisKelamin: 'Pria',
    JenisBantuanPernahDiterima: 'Sembako',
    keterangan: 'Entah apa',
    date: '04/10/21',
  },
  {
    id: 6,
    Jumlah: '2 Orang',
    JenisKelamin: 'Pria',
    JenisBantuanPernahDiterima: 'Sembako',
    keterangan: 'Entah apa',
    date: '04/10/21',
  },
  {
    id: 7,
    Jumlah: '2 Orang',
    JenisKelamin: 'Pria',
    JenisBantuanPernahDiterima: 'Sembako',
    keterangan: 'Entah apa',
    date: '04/10/21',
  },
  {
    id: 8,
    Jumlah: '2 Orang',
    JenisKelamin: 'Pria',
    JenisBantuanPernahDiterima: 'Sembako',
    keterangan: 'Entah apa',
    date: '04/10/21',
  },
  {
    id: 9,
    Jumlah: '2 Orang',
    JenisKelamin: 'Pria',
    JenisBantuanPernahDiterima: 'Sembako',
    keterangan: 'Entah apa',
    date: '04/10/21',
  },
  {
    id: 10,
    Jumlah: '2 Orang',
    JenisKelamin: 'Pria',
    JenisBantuanPernahDiterima: 'Sembako',
    keterangan: 'Entah apa',
    date: '04/10/21',
  },
]

const stunting = () => {
  return (
    <main className='mx-auto max-w-screen-2xl px-1 py-2 lg:py-4'>
      <h1 className='py-4 text-xl text-center font-bold uppercase'>
        Daftar Laporan Stunting
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
              (
                {
                  id,
                  Jumlah,
                  JenisKelamin,
                  JenisBantuanPernahDiterima,
                  keterangan,
                  date,
                },
                index
              ) => (
                <tr key={id} className='even:bg-blue-gray-50/50'>
                  <td className='p-4 w-8'>
                    <Link href={`/stunting/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {id}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/stunting/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {Jumlah}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/stunting/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {JenisKelamin}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/stunting/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {JenisBantuanPernahDiterima}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/stunting/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {keterangan}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/stunting/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {date}
                      </Typography>
                    </Link>
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

export default stunting
