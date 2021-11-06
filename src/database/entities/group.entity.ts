import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { UserInGroup } from '.'

export const GROUP_TABLE_NAME = 'groups'

@Entity(GROUP_TABLE_NAME)
export class GroupEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @Column({ type: String })
    shortName: string

    @OneToMany(() => UserInGroup, userInGroup => userInGroup.groups)
    userInGroup: UserInGroup[]

}