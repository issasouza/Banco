import { IsEnum, IsNumber, IsUUID } from 'class-validator';
import { TipoConta } from '../contas-tipo.enum';
import { Cliente } from 'src/cliente/entities/cliente.entity';

export class CreateContaDto {

    @IsEnum(TipoConta)
    contaTipo: TipoConta;

    @IsNumber()
    total: number;

    @IsUUID()
    clienteId: Cliente;
}
