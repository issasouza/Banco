import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoConta } from "../contas-tipo.enum";
import { Cliente } from "src/cliente/entities/cliente.entity";
import { ContaInterface } from "../conta.interface";


@Entity('conta')
export class Conta implements ContaInterface {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    contaTipo: TipoConta.Corrente | TipoConta.Poupanca

    @Column()
    total: number;

    
    @ManyToOne(() => Cliente, cliente => cliente.contas)  // Define a relação com a entidade Cliente
    cliente: Cliente;
    

    getTotal(): number {
        return this.total;
    }

    deposito(valor: number): void {
        this.total += valor;
    }

    saldo(value: number): void {
        if (value <= this.total) {
          this.total -= value;
          return;
        }
        throw new Error('Saldo insuficiente');
      }
}
