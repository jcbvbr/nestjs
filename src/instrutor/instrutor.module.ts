import { Module } from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { InstrutorController } from './instrutor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrutorEntity } from './instrutor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstrutorEntity])],
  providers: [InstrutorService],
  controllers: [InstrutorController],
})
export class InstrutorModule {}
