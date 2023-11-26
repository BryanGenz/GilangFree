import { compare, genSalt, hash } from 'bcrypt'
import { Document, Model, Schema, model, models } from 'mongoose'

interface userDocument extends Document {
  userName: string
  email: string
  password: string
  role: 'admin' | 'user'
}

interface Method {
  comparePassword(password: string): Promise<boolean>
}

const userSchema = new Schema<userDocument, {}, Method>(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next()

    const salt = await genSalt(10)
    this.password = await hash(this.password, salt)

    next()
  } catch (error: any) {
    throw error
  }
})

userSchema.methods.comparePassword = async function (password) {
  try {
    return await compare(password, this.password)
  } catch (error: any) {
    throw error
  }
}

const UserModel = models.User || model('User', userSchema)

export default UserModel as Model<userDocument, {}, Method>
