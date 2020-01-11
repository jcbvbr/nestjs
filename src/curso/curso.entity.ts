import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TurmaEntity } from 'src/turma/turma.entity';

@Entity('curso')
export class CursoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 255 })
    requisito: string;

    @Column()
    cargaHoraria: number;

    @Column({ type: 'double' })
    preco: number;

    @OneToMany(type => TurmaEntity, turma => turma.curso)
    turmas: TurmaEntity[];
}
