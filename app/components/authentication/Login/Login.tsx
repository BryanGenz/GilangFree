'use client'
import React from 'react'
import Image from 'next/image'
import { Input, Button } from '@material-tailwind/react'
import { useFormik } from 'formik'
import { filterFormikErrors } from '@/app/utility/formikHelpers'
import { XMarkIcon } from '@heroicons/react/24/outline'
import * as yup from 'yup'
import { signIn } from 'next-auth/react'
import logoKel from '@/public/Logo-kel.jpg'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid Email!').required('Email is Required!'),
  password: yup
    .string()
    .min(8, 'Password Min Length is 8 Characters')
    .required('Password is Required!'),
})

const Login = () => {
  const router = useRouter()
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async (values, action) => {
      const loginRes = await signIn('credentials', {
        ...values,
        redirect: false,
        // callbackUrl: '/pkk-pokjaI',
      })

      if (loginRes?.error === 'CredentialsSignin') {
        toast.error('Email/Password Mismatch')
      }

      if (!loginRes?.error) {
        router.refresh()
      }
    },
  })

  const errorToRender = filterFormikErrors(errors, touched, values)

  type valueKeys = keyof typeof values

  const { email, password } = values

  const error = (name: valueKeys) => {
    return errors[name] && touched[name] ? true : false
  }

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
        onSubmit={handleSubmit}
      >
        <div className='w-72'>
          <Input
            name='email'
            label='Email'
            type='email'
            crossOrigin={undefined}
            className='bg-gray-200'
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error('email')}
          />
        </div>
        <div className='w-72'>
          <Input
            name='password'
            label='Password'
            type='password'
            crossOrigin={undefined}
            className='bg-gray-200'
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error('password')}
          />
        </div>
        <Button className='w-11/12' type='submit' disabled={isSubmitting}>
          Button
        </Button>

        <div className=''>
          {errorToRender.map((err) => {
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

export default Login
