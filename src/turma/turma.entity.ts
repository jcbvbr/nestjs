import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { InstrutorEntity } from 'src/instrutor/instrutor.entity';
import { CursoEntity } from 'src/curso/curso.entity';
import { MatriculaEntity } from 'src/matricula/matricula.entity';

@Entity('turma')
export class TurmaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'date'})
    dataInicio: Date;

    @Column({type: 'date'})
    dataFinal: Date;

    @Column()
    cargaHoraria: number;

    @Column({length: 36})
    instrutorId: string;

    @Column({length: 36})
    cursoId: string;

    @ManyToOne(type => InstrutorEntity, instrutor => instrutor.turmas)
    instrutor: InstrutorEntity;

    @ManyToOne(type => CursoEntity, curso => curso.turmas)
    curso: CursoEntity;

    @OneToMany(type => MatriculaEntity, matricula => matricula.turma)
    matriculas: MatriculaEntity[];
}
