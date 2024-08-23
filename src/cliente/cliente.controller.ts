import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() 
    createClienteDto: CreateClienteDto) {
      const client = new Cliente (
        createClienteDto.nomeCompleto,
        createClienteDto.endereco,
        createClienteDto.telefone
      )
    return this.clienteService.create(client);
  }

  @Get()
  findAll() {
    return this.clienteService.findAllCliente();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOneCliente(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteService.remove(id);
  }
}
