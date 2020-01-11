import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlunoEntity } from './aluno.entity';
import { Repository } from 'typeorm';
import { AlunoDto } from './aluno.dto';

@Injectable()
export class AlunoService {
    constructor(@InjectRepository(AlunoEntity) private alunoRepository: Repository<AlunoEntity>) {}

    async get() {
        return await this.alunoRepository.find();
    }

    async create(data: AlunoDto) {
        const curso = await this.alunoRepository.create(data);
        await this.alunoRepository.save(curso);
        return curso;
    }

    async getById(id: string) {
        return await this.alunoRepository.findOne({where: { id } });
    }

    async update(id: string, data: Partial<AlunoDto>) {
        await this.alunoRepository.update({ id }, data);
        return await this.alunoRepository.findOne({ id });
    }

    async destroy(id: string) {
        await this.alunoRepository.delete({ id });
        return { deleted: true };
    }
}
