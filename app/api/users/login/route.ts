import startDb from '@/app/library/db'
import UserModel from '@/app/models/userModels'
import { ISignInCredentials } from '@/app/types'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const { email, password } = (await req.json()) as ISignInCredentials

  if (!email || !password)
    return NextResponse.json({
      error: 'invalid request, email or password missing',
    })

  await startDb()

  const userName = await UserModel.findOne({ email })
  if (!userName) return NextResponse.json({ error: 'invalid email/password' })

  const passwordMatch = await userName.comparePassword(password)
  if (!passwordMatch)
    return NextResponse.json({ error: 'invalid email/password' })

  return NextResponse.json({
    userName: { id: userName._id.toString(), userName: userName.userName },
  })
}
