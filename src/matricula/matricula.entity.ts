import { Entity, Column, ManyToOne} from 'typeorm';
import { TurmaEntity } from 'src/turma/turma.entity';
import { AlunoEntity } from 'src/aluno/aluno.entity';
import { BaseEntity } from 'src/base/BaseEntity';

@Entity('matricula')
export class MatriculaEntity extends BaseEntity {
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
