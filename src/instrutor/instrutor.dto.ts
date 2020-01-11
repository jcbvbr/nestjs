import { ApiProperty } from '@nestjs/swagger';

export class InstrutorDto {
    @ApiProperty()
    id?: string;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    certificados: string;

    @ApiProperty()
    valorHora: number;
}
