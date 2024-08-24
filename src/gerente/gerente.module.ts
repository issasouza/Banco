import { Module } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { GerenteController } from './gerente.controller';
import { Gerente } from './entities/gerente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Gerente])],
  controllers: [GerenteController],
  providers: [GerenteService],
  exports: [GerenteService]
})
export class GerenteModule {}
