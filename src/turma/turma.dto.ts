import { ApiProperty } from '@nestjs/swagger';
import { InstrutorDto } from 'src/instrutor/instrutor.dto';

export class TurmaDto {
    @ApiProperty()
    id?: string;

    @ApiProperty()
    dataInicio?: Date;

    @ApiProperty()
    dataFinal?: Date;

    @ApiProperty()
    cargaHoraria: number;

    instrutor?: InstrutorDto;
}
