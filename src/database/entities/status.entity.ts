import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { UserEntity } from '.'

export const STATUS_TABLE_NAME = 'statuses'

@Entity(STATUS_TABLE_NAME)
export class StatusEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({ type: String })
    name: string

    @ManyToOne(() => UserEntity, user => user.statusId)
    users: UserEntity[]
}