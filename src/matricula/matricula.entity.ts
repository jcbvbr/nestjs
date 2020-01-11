import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TurmaEntity } from 'src/turma/turma.entity';
import { TurmaService } from 'src/turma/turma.service';
import { AlunoEntity } from 'src/aluno/aluno.entity';

@Entity('matricula')
export class MatriculaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'date'})
    dataMatricula: Date;

    @Column({length: 36})
    turmaId: string;

    @Column({length: 36})
    alunoId: string;

    @ManyToOne(type => TurmaEntity, turma => turma.matriculas)
    turma: TurmaEntity;

    @ManyToOne(type => AlunoEntity, aluno => aluno.matriculas)
    aluno: AlunoEntity;
}
