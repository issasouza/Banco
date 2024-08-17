import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente/entities/cliente.entity';
import { GerenteModule } from './gerente/gerente.module';
import { Gerente } from './gerente/entities/gerente.entity';
import { ContasModule } from './contas/contas.module';
import { Conta } from './contas/entities/conta.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port: 5432,
    database:'postgres',
    username:'postgres',
    password:'root',
    entities:[Cliente,Gerente,Conta],
    synchronize:true,
  }), 
  ClienteModule, GerenteModule, ContasModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
