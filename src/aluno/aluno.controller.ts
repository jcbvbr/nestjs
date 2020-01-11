import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoDto } from './aluno.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('aluno')
@Controller('aluno')
export class AlunoController {
    constructor(private alunoService: AlunoService) {}

    @Get()
    get() {
        return this.alunoService.get();
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    create(@Body() data: AlunoDto) {
        return this.alunoService.create(data);
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.alunoService.getById(id);
    }

    @Put(':id')
    update(@Body() data: Partial<AlunoDto>, @Param('id') id: string) {
        return this.alunoService.update(id, data);
    }

    @Delete(':id')
    destroy(@Param('id') id: string) {
        return this.alunoService.destroy(id);
    }
}
