import { Module } from '@nestjs/common';
import { CursoController } from './curso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoEntity } from './curso.entity';
import { CursoService } from './curso.service';

@Module({
  imports: [TypeOrmModule.forFeature([CursoEntity])],
  controllers: [CursoController],
  providers: [CursoService],
  exports: [CursoService],
})
export class CursoModule {}
