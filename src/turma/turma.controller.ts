import { Controller, Get, Post, Body, Param, Put, Delete, Query, UsePipes } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { TurmaService } from './turma.service';
import { TurmaDto } from './turma.dto';
import { ValidationPipe } from 'src/shared/validation.pipe';

@ApiTags('Turma')
@Controller('turma')
export class TurmaController {
    constructor(private readonly turmaService: TurmaService) {}

    @Get()
    get(@Query('page') page: number = 0, @Query('limit') limit: number = 0) {
        limit = limit > 100 ? 100 : limit;
        return this.turmaService.paginate({page, limit, route: 'http:localhost:4000/turma' });
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiOperation( { description: 'Cria uma nova turma.' } )
    @ApiResponse({ status: 201, description: 'Sucesso na inclusão de uma nova turma'})
    create(@Body() data: TurmaDto) {
        return this.turmaService.create(data);
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.turmaService.getById(id);
    }

    @Get(':id/instrutor')
    getWithInstrutor(@Param('id') id: string) {
        return this.turmaService.getWithInstrutor(id);
    }

    @Get(':id/curso')
    getWithCurso(@Param('id') id: string) {
        return this.turmaService.getWithCurso(id);
    }

    @Get(':id/matriculas')
    getWithMatriculas(@Param('id') id: string) {
        return this.turmaService.getWithMatriculas(id);
    }

    @Put(':id')
    update(@Body() data: Partial<TurmaDto>, @Param('id') id: string) {
        return this.turmaService.update(id, data);
    }

    @Delete(':id')
    destroy(@Param('id') id: string) {
        return this.turmaService.destroy(id);
    }
}
