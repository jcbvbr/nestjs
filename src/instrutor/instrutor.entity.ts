import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TurmaEntity } from 'src/turma/turma.entity';

@Entity('instrutor')
export class InstrutorEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

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
