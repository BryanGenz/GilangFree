import { useSession } from 'next-auth/react'

interface IAuth {
  loading: boolean
  loggedIn: boolean
  isAdmin: boolean
}

export default function useAuth(): IAuth {
  const session = useSession()
  return {
    loading: session.status === 'loading',
    loggedIn: session.status === 'authenticated',
    isAdmin: false,
  }
}
