import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { User } from 'src/database/user/schema/user.schema'

export type GroupDocument = Group & Document

export const GROUP_COLLECTION_NAME = 'groups'

@Schema({ collection: GROUP_COLLECTION_NAME, timestamps: { createdAt: 'createdAt', updatedAt: false } })
export class Group {

    _id: string

    @Prop({ required: true })
    name: string

    @Prop({ type: Types.ObjectId, required: false, ref: 'User' })
    users: User[]

    @Prop({ required: false })
    createdAt: number
}

export const GroupSchema = SchemaFactory.createForClass(Group)
