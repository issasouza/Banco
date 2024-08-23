import {
    IsString,
    IsNotEmpty,
  } from 'class-validator';

export class CreateClienteDto {
    
    @IsNotEmpty()
    @IsString()
    nomeCompleto: string;

    @IsNotEmpty()
    @IsString()
    endereco: string;

    @IsNotEmpty()
    @IsString()
    telefone:string;
}

/*-nomeCompleto: String
-id: String
-endereco: String
-telefone: String*/