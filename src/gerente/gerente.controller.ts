import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { CreateGerenteDto } from './dto/create-gerente.dto';
import { UpdateGerenteDto } from './dto/update-gerente.dto';
import { Gerente } from './entities/gerente.entity';

@Controller('gerente')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) {}

  @Post()
  create(@Body() createGerenteDto: CreateGerenteDto) {
    const gerente = new Gerente(
      createGerenteDto.nomeGerente
    )
    return this.gerenteService.create(gerente);
  }

  @Get()
  findAll() {
    return this.gerenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gerenteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGerenteDto: UpdateGerenteDto) {
    return this.gerenteService.update(id, updateGerenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gerenteService.remove(id);
  }
}
