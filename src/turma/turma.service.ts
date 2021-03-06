import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TurmaEntity } from './turma.entity';
import { Repository } from 'typeorm';
import { TurmaDto } from './turma.dto';
import {paginate, Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate';
import { throws } from 'assert';

@Injectable()
export class TurmaService {
    constructor(
        @InjectRepository(TurmaEntity)
        private readonly turmaRepositorio: Repository<TurmaEntity>,
    ) {}

    async paginate(options: IPaginationOptions): Promise<Pagination<TurmaEntity>> {
        return await paginate<TurmaEntity>(this.turmaRepositorio, options);
      }

    async get() {
        return await this.turmaRepositorio.find();
    }

    async getWithInstrutor(idTurma: string) {
        return await this.turmaRepositorio
            .createQueryBuilder('turma')
            .leftJoin('turma.instrutor', 'instrutor')
            .select(['turma.id', 'turma.dataInicio', 'turma.dataFinal', 'turma.cargaHoraria', 'turma.cursoId'])
            .addSelect(['instrutor.id', 'instrutor.nome', 'instrutor.email', 'instrutor.certificados', 'instrutor.valorHora'])
            .where({ id: idTurma })
            .getOne();
    }

    async getWithCurso(idTurma: string) {
        return await this.turmaRepositorio.find({
            where: { id: idTurma },
            join: {
                alias: 'turma',
                leftJoinAndSelect: {
                    curso: 'turma.curso',
                },
            },
        });
    }

    async getWithMatriculas(idTurma: string) {
        return await this.turmaRepositorio.find({
            where: { id: idTurma },
            join: {
                alias: 'turma',
                leftJoinAndSelect: {
                    matriculas: 'turma.matriculas',
                },
            },
        });
    }

    async create(data: TurmaDto) {
        const turma = await this.turmaRepositorio.create(data);
        await this.turmaRepositorio.save(turma);
        return turma;
    }

    async getById(id: string) {
        const turma = await this.turmaRepositorio.findOne({ id });
        if (!turma) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return turma;
    }

    async update(id: string, data: Partial<TurmaDto>) {
        const turma = await this.turmaRepositorio.findOne({ id });
        if (!turma) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        await this.turmaRepositorio.update({ id }, data);
        return turma;
    }

    async destroy(id: string) {
        const turma = await this.turmaRepositorio.findOne({ id });
        if (!turma) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        await this.turmaRepositorio.delete({ id });
        return turma;
    }
}
