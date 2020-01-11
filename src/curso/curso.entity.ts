import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
