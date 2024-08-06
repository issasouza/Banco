create table CLIENTES(
    id SERIAL primary key,
    nomeCompleto text not null,
    endereco text not null,
    telefone text not null,
);
SELECT * FROM CLIENTES;
