import { Entity, Column, OneToMany } from 'typeorm';
import { TurmaEntity } from 'src/turma/turma.entity';
import { BaseEntity } from 'src/base/BaseEntity';

@Entity('instrutor')
export class InstrutorEntity extends BaseEntity {

    @Column({ length: 50 })
    nome: string;

    @Column({ length: 50 })
    email: string;

    @Column({ length: 255 })
    certificados: string;

    @Column({ type: 'double' })
    valorHora: number;

    @OneToMany(type => TurmaEntity, turma => turma.instrutor)
    turmas: TurmaEntity[];
}
