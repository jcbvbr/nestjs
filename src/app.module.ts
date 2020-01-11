import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoModule } from './curso/curso.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CursoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
