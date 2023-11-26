'use client'
import { SignUp } from '@/app/components/authentication'
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { filterFormikErrors } from '@/app/utility/formikHelpers'

const validationSchema = yup.object().shape({
  userName: yup.string().required('Name is Required!'),
  email: yup.string().email('Invalid Email!').required('Email is Required!'),
  password: yup
    .string()
    .min(8, 'Password Min Length is 8 Characters')
    .required('Password is Required!'),
})

const SignUpForm = () => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: { userName: '', email: '', password: '' },
    validationSchema,
    onSubmit: async (values, action) => {
      action.setSubmitting(true)
      await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(values),
      }).then(async (res) => {
        if (res.ok) {
          const result = await res.json()
        }
        action.setSubmitting(false)
      })
    },
  })

  const formErrors: string[] = filterFormikErrors(errors, touched, values)

  type valueKeys = keyof typeof values

  const error = (name: valueKeys) => {
    return errors[name] && touched[name] ? true : false
  }

  return (
    <section
      id='login'
      className='mt-2 lg:mt-8 mx-auto max-w-screen-2xl h-[735px] px-4 py-2 lg:px-8 lg:py-4 bg-green-200 flex justify-center items-center '
      style={{
        backgroundImage: `url(${'/hero.jpg'})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: 'auto',
        height: '735px',
      }}
    >
      <SignUp
        isSubmitting={isSubmitting}
        handleBlur={handleBlur}
        handleChange={handleChange}
        values={values}
        onSubmit={handleSubmit}
        formErrors={formErrors}
        err={error}
      />
    </section>
  )
}

export default SignUpForm
