import { Gerente } from 'src/gerente/entities/gerente.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
    ManyToOne,
  } from 'typeorm';


@Entity('cliente')
export class Cliente {
    
    @PrimaryGeneratedColumn('uuid')
    public id: string;     

    @Column()
    public nomeCompleto: string;

    @Column()
    public endereco: string;

    @Column()
    public telefone:string;

    //@ManyToOne(() => Gerente, gerente => gerente.clientes)
    //@JoinColumn({})
    gerente?: Gerente;

    constructor(nomeCompleto:string, endereco:string, telefone:string, id?: string,){
        
        this.endereco = endereco
        this.nomeCompleto =nomeCompleto
        this.telefone = telefone
        this.gerente = null

        if (!id) {
            this.id = id;
          }
    }
}

/*-nomeCompleto: String
-id: String
-endereco: String
-telefone: String
-Conta: ContaBancaria
-gerente: Gerente*/