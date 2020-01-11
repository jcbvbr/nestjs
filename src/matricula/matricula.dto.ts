import { ApiProperty } from '@nestjs/swagger';
import { TurmaDto } from 'src/turma/turma.dto';
import { AlunoDto } from 'src/aluno/aluno.dto';

export class MatriculaDto {
    @ApiProperty()
    id?: string;

    @ApiProperty()
    dataMatricula: Date;

    @ApiProperty()
    turmaId: string;

    @ApiProperty()
    alunoId: string;

    turma: TurmaDto;
    aluno: AlunoDto;
}
