import { Cliente } from "src/cliente/entities/cliente.entity";
import { TipoConta } from "./contas-tipo.enum";

export interface ContaInterface{
    contaTipo : TipoConta
    total: number
    cliente:Cliente
    
}