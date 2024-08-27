import { Injectable } from '@nestjs/common';
import { CreateGerenteDto } from './dto/create-gerente.dto';
import { UpdateGerenteDto } from './dto/update-gerente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gerente } from './entities/gerente.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Injectable()
export class GerenteService {

  constructor(
    @InjectRepository(Gerente)
    private gerenteRepository: Repository<Gerente>,
  ){}

  create(createGerenteDto: CreateGerenteDto) {
    const gerente = this .gerenteRepository.create(createGerenteDto);
    return this.gerenteRepository.save(gerente);
  }

  findAll():Promise<Gerente[]> {
    return this.gerenteRepository.find();
  }

  findOne(id: string):Promise<Gerente> {
    return this.gerenteRepository.findOneBy({id});
  }

  async update(id: string, updateGerenteDto: UpdateGerenteDto):Promise<Gerente> {
    await this.gerenteRepository.update(id,updateGerenteDto)
    return this.gerenteRepository.findOneBy({id});
  }

  async remove(id: string):Promise<void> {
   await this.gerenteRepository.delete(id);
  }

}
