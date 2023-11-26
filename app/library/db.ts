import mongoose from 'mongoose'

let connection: typeof mongoose

// const uri =
//   'mongodb+srv://BryanGenz123:Anjinggoblog123@genzonlinedev.rjyrt.mongodb.net/Gilang-Free?retryWrites=true&w=majority'

const startDb = async () => {
  try {
    if (!connection) {
      connection = await mongoose.connect(process.env.MONGO_URI as string)
      console.log('connected')
    }
    return connection
  } catch (error: any) {
    console.log(error)
  }
}

export default startDb
