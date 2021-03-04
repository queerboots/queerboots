import {
    Entity,
    Column,
    Unique,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm"
import {Length} from "class-validator"
import * as bcrypt from "bcryptjs"

@Entity()
@Unique(["username"])
export class Member {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Length(4, 20)
    username: string

    @Column()
    @Length(4, 100)
    password: string

    @Column()
    @CreateDateColumn()
    createdAt: Date

    @Column()
    @UpdateDateColumn()
    updatedAt: Date

    hashPassword(): void {
        this.password = bcrypt.hashSync(this.password, 8)
    }

    comparePassword(unencryptedPassword: string): boolean {
        return bcrypt.compareSync(unencryptedPassword, this.password)
    }

}