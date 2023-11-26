import NextAuth, { NextAuthConfig } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { ISignInCredentials } from './app/types'

const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, request) {
        const { email, password } = credentials as ISignInCredentials
        //Send request to your api route where you can sign in user and send error/success to this function.

        const { userName, error } = await fetch(
          'http://localhost:3000/api/users/login',
          {
            method: 'POST',
            body: JSON.stringify({ email, password }),
          }
        ).then(async (res) => await res.json())

        if (error) return null

        return { id: userName.id }
      },
    }),
  ],
}

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig)
