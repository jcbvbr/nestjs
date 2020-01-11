import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
