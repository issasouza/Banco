import { Injectable } from '@nestjs/common';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { Conta } from './entities/conta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContasService {
  
  constructor(
    @InjectRepository(Conta)
    private contaRepository:
    Repository<Conta>
  ){}

  create(createContaDto: CreateContaDto): Promise<Conta> {
    const novaConta = this.contaRepository.create(createContaDto);
    return this.contaRepository.save(novaConta);
}


  findAll() {
    return `This action returns all contas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conta`;
  }

  update(id: number, updateContaDto: UpdateContaDto) {
    return `This action updates a #${id} conta`;
  }

  remove(id: number) {
    return `This action removes a #${id} conta`;
  }
}
