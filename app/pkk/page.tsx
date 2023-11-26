'use client'
import React from 'react'
import Link from 'next/link'
import { Card, Typography } from '@material-tailwind/react'

const TABLE_HEAD = [
  'POKJA',
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
  'Keterangan',
  'Options',
]

const TABLE_ROWS = [
  {
    id: 1,
    pokja: 'Pokja 1',
    januari: 'xxxxxx-1',
    februari: 'xxxxxx-2',
    maret: 'xxxxxx-3',
    april: 'xxxxxx-4',
    mei: 'xxxxxx-5',
    juni: 'xxxxxx-6',
    juli: 'xxxxxx-7',
    agustus: 'xxxxxx-8',
    september: 'xxxxxx-9',
    oktober: 'xxxxxx-10',
    november: 'xxxxxx-11',
    desember: 'xxxxxx-12',
    keterangan: 'xxxxxx',
  },
  {
    id: 2,
    pokja: 'Pokja 1',
    januari: 'xxxxxx-1',
    februari: 'xxxxxx-2',
    maret: 'xxxxxx-3',
    april: 'xxxxxx-4',
    mei: 'xxxxxx-5',
    juni: 'xxxxxx-6',
    juli: 'xxxxxx-7',
    agustus: 'xxxxxx-8',
    september: 'xxxxxx-9',
    oktober: 'xxxxxx-10',
    november: 'xxxxxx-11',
    desember: 'xxxxxx-12',
    keterangan: 'xxxxxx',
  },
  {
    id: 3,
    pokja: 'Pokja 2',
    januari: 'xxxxxx-1',
    februari: 'xxxxxx-2',
    maret: 'xxxxxx-3',
    april: 'xxxxxx-4',
    mei: 'xxxxxx-5',
    juni: 'xxxxxx-6',
    juli: 'xxxxxx-7',
    agustus: 'xxxxxx-8',
    september: 'xxxxxx-9',
    oktober: 'xxxxxx-10',
    november: 'xxxxxx-11',
    desember: 'xxxxxx-12',
    keterangan: 'xxxxxx',
  },
  {
    id: 4,
    pokja: 'Pokja 2',
    januari: 'xxxxxx-1',
    februari: 'xxxxxx-2',
    maret: 'xxxxxx-3',
    april: 'xxxxxx-4',
    mei: 'xxxxxx-5',
    juni: 'xxxxxx-6',
    juli: 'xxxxxx-7',
    agustus: 'xxxxxx-8',
    september: 'xxxxxx-9',
    oktober: 'xxxxxx-10',
    november: 'xxxxxx-11',
    desember: 'xxxxxx-12',
    keterangan: 'xxxxxx',
  },
  {
    id: 5,
    pokja: 'Pokja 3',
    januari: 'xxxxxx-1',
    februari: 'xxxxxx-2',
    maret: 'xxxxxx-3',
    april: 'xxxxxx-4',
    mei: 'xxxxxx-5',
    juni: 'xxxxxx-6',
    juli: 'xxxxxx-7',
    agustus: 'xxxxxx-8',
    september: 'xxxxxx-9',
    oktober: 'xxxxxx-10',
    november: 'xxxxxx-11',
    desember: 'xxxxxx-12',
    keterangan: 'xxxxxx',
  },
  {
    id: 6,
    pokja: 'Pokja 3',
    januari: 'xxxxxx-1',
    februari: 'xxxxxx-2',
    maret: 'xxxxxx-3',
    april: 'xxxxxx-4',
    mei: 'xxxxxx-5',
    juni: 'xxxxxx-6',
    juli: 'xxxxxx-7',
    agustus: 'xxxxxx-8',
    september: 'xxxxxx-9',
    oktober: 'xxxxxx-10',
    november: 'xxxxxx-11',
    desember: 'xxxxxx-12',
    keterangan: 'xxxxxx',
  },
  {
    id: 7,
    pokja: 'Pokja 4',
    januari: 'xxxxxx-1',
    februari: 'xxxxxx-2',
    maret: 'xxxxxx-3',
    april: 'xxxxxx-4',
    mei: 'xxxxxx-5',
    juni: 'xxxxxx-6',
    juli: 'xxxxxx-7',
    agustus: 'xxxxxx-8',
    september: 'xxxxxx-9',
    oktober: 'xxxxxx-10',
    november: 'xxxxxx-11',
    desember: 'xxxxxx-12',
    keterangan: 'xxxxxx',
  },
  {
    id: 8,
    pokja: 'Pokja 4',
    januari: 'xxxxxx-1',
    februari: 'xxxxxx-2',
    maret: 'xxxxxx-3',
    april: 'xxxxxx-4',
    mei: 'xxxxxx-5',
    juni: 'xxxxxx-6',
    juli: 'xxxxxx-7',
    agustus: 'xxxxxx-8',
    september: 'xxxxxx-9',
    oktober: 'xxxxxx-10',
    november: 'xxxxxx-11',
    desember: 'xxxxxx-12',
    keterangan: 'xxxxxx',
  },
  {
    id: 9,
    pokja: 'Pokja 5',
    januari: 'xxxxxx-1',
    februari: 'xxxxxx-2',
    maret: 'xxxxxx-3',
    april: 'xxxxxx-4',
    mei: 'xxxxxx-5',
    juni: 'xxxxxx-6',
    juli: 'xxxxxx-7',
    agustus: 'xxxxxx-8',
    september: 'xxxxxx-9',
    oktober: 'xxxxxx-10',
    november: 'xxxxxx-11',
    desember: 'xxxxxx-12',
    keterangan: 'xxxxxx',
  },
  {
    id: 10,
    pokja: 'Pokja 5',
    januari: 'xxxxxx-1',
    februari: 'xxxxxx-2',
    maret: 'xxxxxx-3',
    april: 'xxxxxx-4',
    mei: 'xxxxxx-5',
    juni: 'xxxxxx-6',
    juli: 'xxxxxx-7',
    agustus: 'xxxxxx-8',
    september: 'xxxxxx-9',
    oktober: 'xxxxxx-10',
    november: 'xxxxxx-11',
    desember: 'xxxxxx-12',
    keterangan: 'xxxxxx',
  },
]

const Pkk = () => {
  return (
    <main className='mx-auto max-w-screen-2xl px-1 py-2 lg:py-4'>
      <h1 className='py-4 text-xl text-center font-bold uppercase'>
        Pembinaan Kesejahteraan Keluarga - PKK
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
                  pokja,
                  januari,
                  februari,
                  maret,
                  april,
                  mei,
                  juni,
                  juli,
                  agustus,
                  september,
                  oktober,
                  november,
                  desember,
                  keterangan,
                },
                index
              ) => (
                <tr key={id} className='even:bg-blue-gray-50/50'>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {pokja}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {januari}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {februari}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {maret}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {april}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {mei}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {juni}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {juli}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {agustus}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {september}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {oktober}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {november}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {desember}
                      </Typography>
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Link href={`/pkk-pokjaI/${id}`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal text-center'
                      >
                        {keterangan}
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
    </main>
  )
}

export default Pkk
