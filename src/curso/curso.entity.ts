import { Entity, Column, OneToMany } from 'typeorm';
import { TurmaEntity } from 'src/turma/turma.entity';
import { BaseEntity } from 'src/base/BaseEntity';

@Entity('curso')
export class CursoEntity extends BaseEntity {

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
