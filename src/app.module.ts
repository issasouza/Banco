import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port: 5432,
    database:'postgres',
    username:'postgres',
    password:'root',
    entities:[Cliente],
    synchronize:true,
  }), 
  ClienteModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
