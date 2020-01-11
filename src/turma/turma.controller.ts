import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { TurmaService } from './turma.service';
import { TurmaDto } from './turma.dto';

@ApiTags('Turma')
@Controller('turma')
export class TurmaController {
    constructor(private readonly turmaService: TurmaService) {}

    @Get()
    get() {
        return this.turmaService.get();
    }

    @Post()
    @ApiResponse({ status: 201, description: 'Sucesso na inclusão de uma nova turma'})
    create(@Body() data: TurmaDto) {
        return this.turmaService.create(data);
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.turmaService.getById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: Partial<TurmaDto>) {
        return this.turmaService.update(id, data);
    }

    @Delete(':id')
    destroy(@Param('id') id: string) {
        return this.turmaService.destroy(id);
    }
}
