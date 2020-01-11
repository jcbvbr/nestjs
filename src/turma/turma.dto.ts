import { InstrutorEntity } from 'src/instrutor/instrutor.entity';
import { ApiProperty } from '@nestjs/swagger';

export class TurmaDto {
    @ApiProperty()
    id?: string;

    @ApiProperty()
    dataInicio?: Date;

    @ApiProperty()
    dataFinal?: Date;

    @ApiProperty()
    cargaHoraria: number;

    instrutor?: InstrutorEntity;
}
