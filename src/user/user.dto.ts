import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
    @ApiProperty()
    @IsNotEmpty()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;
}

// tslint:disable-next-line:max-classes-per-file
export class UserRO {
    id: string;
    username: string;
    created: Date;
    token?: string;
}
