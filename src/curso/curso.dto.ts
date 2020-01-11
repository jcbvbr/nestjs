import { ApiProperty } from '@nestjs/swagger';

export class CursoDTO {
    @ApiProperty()
    id?: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    requisito: string;

    @ApiProperty()
    cargaHoraria: number;

    @ApiProperty()
    preco: number;
}
