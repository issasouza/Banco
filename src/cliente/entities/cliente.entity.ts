import { Conta } from 'src/contas/entities/conta.entity';
import { Gerente } from 'src/gerente/entities/gerente.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
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

    @ManyToOne(() => Gerente, gerente => gerente.clientes)
    @JoinColumn({})
    gerente?: Gerente;
    
    
    @OneToMany(() => Conta, conta => conta.cliente)  // Define a relação com a entidade Conta
    contas: Conta[];

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
-gerente: Gerente */