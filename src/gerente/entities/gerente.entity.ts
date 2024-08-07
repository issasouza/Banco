import { Cliente } from "src/cliente/entities/cliente.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('gerente')
export class Gerente {
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    nomeGerente: string;

    @OneToMany(() => Cliente, cliente => cliente.gerente)
    clientes: Cliente[];

    constructor(nomeGerente: string, id?:string){
        this.nomeGerente = nomeGerente
        

        if (!id) {
            this.id = id;
          }
    }
}
