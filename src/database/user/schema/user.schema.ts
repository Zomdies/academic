import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { Group } from 'src/database/group/schema/group.schema'

export type UserDocument = User & Document

export const USER_COLLECTION_NAME = 'users'

@Schema({ collection: USER_COLLECTION_NAME, timestamps: { createdAt: 'createdAt', updatedAt: false } })
export class User {

    _id: string

    @Prop({ required: true })
    name: string

    @Prop({ type: Types.ObjectId, required: false, ref: 'Group' })
    groups: Group[]

    @Prop({ required: false })
    createdAt: number
}

export const UserSchema = SchemaFactory.createForClass(User)
