import { ApiProperty } from '@nestjs/swagger';

export class AlunoDto {
    @ApiProperty()
    id?: string;

    @ApiProperty()
    cpf: string;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    fone: string;

    @ApiProperty()
    dataNascimento: Date;

}
