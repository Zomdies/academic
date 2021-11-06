import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { StatusEntity, UserInGroup } from "."

export const USER_TABLE_NAME = 'users'

@Entity(USER_TABLE_NAME)
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @Column({ type: String })
    surName: string

    @Column({ type: String })
    login: string

    @Column({ type: String })
    password: string

    @Column({ type: String })
    statusId: string

    @OneToOne(() => StatusEntity, status => status.id)
    status: StatusEntity

    @OneToMany(() => UserInGroup, userInGroup => userInGroup.users)
    userInGroup: UserInGroup[]

}