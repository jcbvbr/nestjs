import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoEntity } from './aluno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlunoEntity])],
  providers: [AlunoService],
  controllers: [AlunoController],
  exports: [AlunoService],
})
export class AlunoModule {}
