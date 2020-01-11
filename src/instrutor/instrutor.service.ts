import { Injectable } from '@nestjs/common';
import { InstrutorEntity } from './instrutor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InstrutorDto } from './instrutor.dto';

@Injectable()
export class InstrutorService {
    constructor(@InjectRepository(InstrutorEntity) private instrutorRepository: Repository<InstrutorEntity>) {}

    async get() {
        return await this.instrutorRepository.find();
    }

    async create(data: InstrutorDto) {
        const curso = await this.instrutorRepository.create(data);
        await this.instrutorRepository.save(curso);
        return curso;
    }

    async getById(id: string) {
        return await this.instrutorRepository.findOne({where: { id } });
    }

    async update(id: string, data: Partial<InstrutorDto>) {
        await this.instrutorRepository.update({ id }, data);
        return await this.instrutorRepository.findOne({ id });
    }

    async destroy(id: string) {
        await this.instrutorRepository.delete({ id });
        return { deleted: true };
    }
}
