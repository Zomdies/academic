import { MongoClient, Db } from 'mongodb'
import * as dotenv from 'dotenv'

dotenv.config()

const MONGO_URI: string = process.env.MONGO_URI || ''

export const getDataBase = async (): Promise<Db> => {
    if (MONGO_URI?.trim() === '') {
        throw new Error(`MONGO_URI hasn't been found in .env`)
    }
    const client: MongoClient = await MongoClient.connect(MONGO_URI, {
        useUnifiedTopology: true,
    })
    return client.db()
}
