import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { GroupEntity, UserEntity } from '.'

export const USER_IN_GROUP_TABLE_NAME = 'user_in_group'

@Entity(USER_IN_GROUP_TABLE_NAME)
export class UserInGroup {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    groupId: string

    @Column({ type: String })
    userId: string

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date

    @CreateDateColumn({
        type: 'timestamptz',
        nullable: true,
        default: () => 'NULL',
    })
    deletedAt?: Date | undefined

    @ManyToOne(() => GroupEntity, group => group.userInGroup)
    groups: GroupEntity[]
    @ManyToOne(() => UserEntity, user => user.userInGroup)
    users: UserEntity[]

}