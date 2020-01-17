import { ApiProperty } from '@nestjs/swagger';
import { InstrutorDto } from 'src/instrutor/instrutor.dto';
import { IsDate, IsNumber } from 'class-validator';

export class TurmaDto {
    @ApiProperty()
    id?: string;

    @IsDate()
    @ApiProperty()
    dataInicio?: Date;

    @IsDate()
    @ApiProperty()
    dataFinal?: Date;

    @IsNumber()
    @ApiProperty()
    cargaHoraria: number;

    instrutor?: InstrutorDto;
}
