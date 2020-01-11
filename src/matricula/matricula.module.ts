import { Module } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { MatriculaController } from './matricula.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriculaEntity } from './matricula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MatriculaEntity])],
  providers: [MatriculaService],
  controllers: [MatriculaController],
  exports: [MatriculaService],
})
export class MatriculaModule {}
