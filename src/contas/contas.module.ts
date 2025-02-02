import { Module } from '@nestjs/common';
import { ContasService } from './contas.service';
import { ContasController } from './contas.controller';

@Module({
  controllers: [ContasController],
  providers: [ContasService],
  exports: [ContasService]
})
export class ContasModule {}
