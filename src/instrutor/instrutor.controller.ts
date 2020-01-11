import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { InstrutorDto } from './instrutor.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('instrutor')
@Controller('instrutor')
export class InstrutorController {
    constructor(private instrutorService: InstrutorService) {}

    @Get()
    get() {
        return this.instrutorService.get();
    }

    @Post()
    create(@Body() data: InstrutorDto) {
        return this.instrutorService.create(data);
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.instrutorService.getById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: Partial<InstrutorDto>) {
        return this.instrutorService.update(id, data);
    }

    @Delete(':id')
    destroy(@Param('id') id: string) {
        return this.instrutorService.destroy(id);
    }
}
