import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { ApiTags } from '@nestjs/swagger';
import { MatriculaDto } from './matricula.dto';

@ApiTags('Matricula')
@Controller('matricula')
export class MatriculaController {
    constructor(private readonly matriculaService: MatriculaService) {}

    @Get()
    get() {
        return this.matriculaService.get();
    }

    @Get(':id')
    getById(id: string) {
        return this.matriculaService.getById(id);
    }

    @Get(':id/turma')
    getWithTurma(@Param('id') id: string) {
        return this.matriculaService.getWithTurma(id);
    }

    @Get(':id/aluno')
    getWithAluno(@Param('id') id: string) {
        return this.matriculaService.getWithAluno(id);
    }

    @Post()
    create(@Body() data: MatriculaDto) {
        return this.matriculaService.create(data);
    }

    @Put(':id')
    update(@Body() data: MatriculaDto, @Param('id') id: string) {
        return this.matriculaService.update(id, data);
    }

    @Delete(':id')
    destroy(id: string) {
        return this.matriculaService.destroy(id);
    }
}
