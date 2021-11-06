import { getDataBase } from '../migrations-utils/get-database'

const DEFAULT_COLLECTION_NAME = ''

/**
 * Template, rewrite his when you want to make migration,
 * after run command : npm run migrate:create
 * after run command : npm run migrate:up
 */
export const up = async (): Promise<void> => {
    const db = await getDataBase()
    const collection = db.collection(DEFAULT_COLLECTION_NAME)
    await collection.createIndex(
        { isDelete: 1, nonce: 1, address: 1 },
        { unique: true },
    )
}

export const down = async (): Promise<void> => {
    const db = await getDataBase()
    const collection = db.collection(DEFAULT_COLLECTION_NAME)
    await collection.dropIndex('isDelete_1_nonce_1_address_1')
}
