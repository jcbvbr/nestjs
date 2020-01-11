import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('aluno')
export class AlunoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'char', length: 11})
    cpf: string;

    @Column({ length: 50 })
    nome: string;

    @Column({ length: 50 })
    email: string;

    @Column({ type: 'char', length: 14 })
    fone: string;

    @Column({ type: 'date' })
    dataNascimento: Date;
}
