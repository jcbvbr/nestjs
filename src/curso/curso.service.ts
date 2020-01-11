import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CursoEntity } from './curso.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoDTO } from './curso.dto';

@Injectable()
export class CursoService {
    constructor(@InjectRepository(CursoEntity) private cursoRepository: Repository<CursoEntity>) {}

    async getCursos() {
        return await this.cursoRepository.find();
    }

    async createCurso(data: CursoDTO) {
        const curso = await this.cursoRepository.create(data);
        await this.cursoRepository.save(curso);
        return curso;
    }

    async getCursoById(id: string) {
        return await this.cursoRepository.findOne({where: { id } });
    }

    async updateCurso(id: string, data: Partial<CursoDTO>) {
        await this.cursoRepository.update({ id }, data);
        return await this.cursoRepository.findOne({ id });
    }

    async destroyCurso(id: string) {
        await this.cursoRepository.delete({ id });
        return { deleted: true };
    }
}
