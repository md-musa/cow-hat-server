import mongoose from 'mongoose'
import app from './app'
import config from './config'

const connectDB = async () => {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('-> MongoDB Connected successfully...')

    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(`-> Could not connected Error: ${err} `)
  }
}

connectDB()
