import { Entity, CreateDateColumn, Column, BeforeInsert } from 'typeorm';
import { BaseEntity } from 'src/base/BaseEntity';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Logger } from '@nestjs/common';
import { type } from 'os';

@Entity('user')
export class UserEntity extends BaseEntity {
    @CreateDateColumn()
    created: Date;

    @Column({
        type: 'varchar',
        unique: true,
    })
    username: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    toResponseObject(showToken: boolean = true) {
        const {id, created, username, token} = this;
        const responseObject: any = { id, created, username };

        if (showToken) {
            responseObject.token = token;
        }

        return responseObject;
    }

    async comparePassword(attempt: string) {
        return await bcrypt.compare(attempt, this.password);
    }

    private get token() {
        const {id, username} = this;
        return jwt.sign({
            id,
            username,
            },
            process.env.SECRET,
            { expiresIn: '7d'},
        );
    }
}
