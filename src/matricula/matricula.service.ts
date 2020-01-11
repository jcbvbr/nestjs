import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatriculaDto } from './matricula.dto';
import { MatriculaEntity } from './matricula.entity';

@Injectable()
export class MatriculaService {
    constructor(
        @InjectRepository(MatriculaEntity)
        private readonly matriculaRepository: Repository<MatriculaEntity>) {}

    async get() {
        return this.matriculaRepository.find();
    }

    async getById(id: string) {
        return this.matriculaRepository.findOne({ id });
    }

    async create(data: MatriculaDto) {
        const turma = await this.matriculaRepository.create(data);
        await this.matriculaRepository.save(turma);
        return turma;
    }

    async update(id: string, data: Partial<MatriculaDto>) {
        await this.matriculaRepository.update({ id }, data);
        return await this.getById(id);
    }

    async destroy(id: string) {
        await this.matriculaRepository.delete({ id });
        return { deleted: true };
    }
}
