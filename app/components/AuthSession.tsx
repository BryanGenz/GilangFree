'use client'
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface props {
  children: ReactNode
}

const AuthSession = ({ children }: props) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthSession
