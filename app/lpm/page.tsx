'use client'
import React from 'react'
import { Card, Typography } from '@material-tailwind/react'

const TABLE_HEAD = [
  'No',
  'Kegiatan',
  'Tanggal Kegiatan',
  'Lokasi',
  'Keterangan',
  'Dokumentasi',
  'Options',
]

const TABLE_ROWS = [
  {
    id: 1,
    kegiatan: 'Penguatan Kelembagaan',
    tanggalKegiatan: '21 XXXXX 2023',
    lokasi: 'Ciwidey',
    keterangan: 'xx Orang Peserta',
    dokumentasi: 'pic.jpg',
  },
  {
    id: 2,
    kegiatan: 'Posyandu Remaja',
    tanggalKegiatan: '22 XXXXX 2023',
    lokasi: 'Posyandu RW 02',
    keterangan: 'xx Orang Peserta',
    dokumentasi: 'pic.jpg',
  },
  {
    id: 3,
    kegiatan: 'Penguatan Kelembagaan',
    tanggalKegiatan: '21 XXXXX 2023',
    lokasi: 'Ciwidey',
    keterangan: 'xx Orang Peserta',
    dokumentasi: 'pic.jpg',
  },
]

const Lpm = () => {
  return (
    <main className='mx-auto max-w-screen-2xl px-1 py-2 lg:py-4'>
      <h1 className='py-4 text-xl text-center font-bold uppercase'>
        Lembaga Pemberdayaan Masyarakat - LPM
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
                  kegiatan,
                  tanggalKegiatan,
                  lokasi,
                  keterangan,
                  dokumentasi,
                },
                index
              ) => (
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
                      {kegiatan}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal text-center'
                    >
                      {tanggalKegiatan}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal text-center'
                    >
                      {lokasi}
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
                      {dokumentasi}
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

export default Lpm
