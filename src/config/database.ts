import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDatabase = async () => {
    const MONGO_URI = process.env.MONGO_URI

    if (!MONGO_URI) {
        console.log('Uri not specified in configuration')
        process.exit(1)
    }

    try {
        await mongoose.connect(MONGO_URI)
        console.log('Connected to Mongo')
    } catch (err) {
        console.log('Failed to connect to Mongo')
    }
}

export default connectDatabase