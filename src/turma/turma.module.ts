import { Module } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { TurmaController } from './turma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TurmaEntity } from './turma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TurmaEntity])],
  providers: [TurmaService],
  controllers: [TurmaController],
  exports: [TurmaService],
})
export class TurmaModule {}
