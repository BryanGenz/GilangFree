'use client'
import { ChangeEvent, FormEventHandler } from 'react'
import Image from 'next/image'
import { Input, Button } from '@material-tailwind/react'
import logoKel from '@/public/Logo-kel.jpg'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface IPValues {
  values: {
    userName: string
    email: string
    password: string
  }
  formErrors: string[]
  handleBlur: (e: React.FocusEvent<any, Element>) => void
  handleChange: (e: ChangeEvent<any>) => void
  onSubmit: FormEventHandler<HTMLFormElement> | undefined
  isSubmitting: boolean
  err: (name: 'userName' | 'email' | 'password') => boolean
}

const SignUp = ({
  isSubmitting,
  handleBlur,
  handleChange,
  onSubmit,
  values,
  formErrors,
  err,
}: IPValues) => {
  const { userName, email, password } = values

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

      <form
        className='space-y-4 flex flex-col justify-center items-center my-8'
        onSubmit={onSubmit}
      >
        <div className='w-72'>
          <Input
            label='Username'
            name='userName'
            type='text'
            crossOrigin={undefined}
            className='bg-gray-200'
            onChange={handleChange}
            onBlur={handleBlur}
            value={userName}
            error={err('userName')}
          />
        </div>
        <div className='w-72'>
          <Input
            label='E-mail'
            name='email'
            type='email'
            crossOrigin={undefined}
            className='bg-gray-200'
            onChange={handleChange}
            onBlur={handleBlur}
            value={email}
            error={err('email')}
          />
        </div>
        <div className='w-72'>
          <Input
            label='Password'
            name='password'
            type='password'
            crossOrigin={undefined}
            className='bg-gray-200'
            onChange={handleChange}
            onBlur={handleBlur}
            value={password}
            error={err('password')}
          />
        </div>
        <Button disabled={isSubmitting} type='submit' className='w-11/12'>
          Button
        </Button>

        <div className=''>
          {formErrors.map((err) => {
            return (
              <div
                key={err}
                className='space-x-1 flex items-center text-red-500'
              >
                <XMarkIcon className='w-4 h-4' />
                <p className='text-xs'>{err}</p>
              </div>
            )
          })}
        </div>
      </form>
    </div>
  )
}

export default SignUp
