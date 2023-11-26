import startDb from '@/app/library/db'
import UserModel from '@/app/models/userModels'
import { INewUserRequest } from '@/app/types'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const body = (await req.json()) as INewUserRequest
  await startDb()

  const newUser = await UserModel.create({
    ...body,
  })
  return NextResponse.json(newUser)
}
