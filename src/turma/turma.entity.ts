import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { InstrutorEntity } from 'src/instrutor/instrutor.entity';
import { CursoEntity } from 'src/curso/curso.entity';

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

    @ManyToOne(type => InstrutorEntity, instrutor => instrutor)
    instrutor: InstrutorEntity;

    @ManyToOne(type => CursoEntity, curso => curso)
    curso: CursoEntity;
}
