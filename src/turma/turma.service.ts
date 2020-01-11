import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TurmaEntity } from './turma.entity';
import { Repository } from 'typeorm';
import { TurmaDto } from './turma.dto';

@Injectable()
export class TurmaService {
    constructor(@InjectRepository(TurmaEntity)
    private readonly turmaRepositorio: Repository<TurmaEntity>) {}

    async get() {
        return await this.turmaRepositorio.find();
    }

    async create(data: TurmaDto) {
        const turma = await this.turmaRepositorio.create(data);
        await this.turmaRepositorio.save(turma);
        return turma;
    }

    async getById(id: string) {
        return await this.turmaRepositorio.findOne({ id });
    }

    async update(id: string, data: Partial<TurmaDto>) {
        await this.turmaRepositorio.update({ id }, data);
        return this.turmaRepositorio.findOne({ id });
    }

    async destroy(id: string) {
        await this.turmaRepositorio.delete({ id });
        return { deleted: true };
    }
}
