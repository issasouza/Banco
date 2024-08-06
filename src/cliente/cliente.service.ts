import { Inject, Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}


  create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente = this.clienteRepository.create(createClienteDto);
    return this.clienteRepository.save(cliente);
  }


  findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  findOne(id:string ): Promise<Cliente> {
    return this.clienteRepository.findOneBy({ id });
  }

  async update(id: string, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    await this.clienteRepository.update(id, updateClienteDto);
    return this.clienteRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.clienteRepository.delete(id);
  }
}
