import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    
    id:string;
    nomeCompleto: string;
    endereco: string;
    telefone:string;
}
