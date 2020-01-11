import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoModule } from './curso/curso.module';
import { InstrutorModule } from './instrutor/instrutor.module';
import { AlunoModule } from './aluno/aluno.module';
import { TurmaModule } from './turma/turma.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CursoModule, InstrutorModule, AlunoModule, TurmaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
