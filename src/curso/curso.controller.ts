import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoDTO } from './curso.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Curso')
@Controller('curso')
export class CursoController {
    constructor(private cursoService: CursoService) {}

    @Get()
    getCursos() {
        return this.cursoService.getCursos();
    }

    @Post()
    createCurso(@Body() data: CursoDTO) {
        return this.cursoService.createCurso(data);
    }

    @Get(':id')
    getCursoById(@Param('id') id: string) {
        return this.cursoService.getCursoById(id);
    }

    @Put(':id')
    updateCurso(@Body() data: Partial<CursoDTO>, @Param('id') id: string) {
        return this.cursoService.updateCurso(id, data);
    }

    @Delete(':id')
    destroyCurso(@Param('id') id: string) {
        return this.cursoService.destroyCurso(id);
    }
}
