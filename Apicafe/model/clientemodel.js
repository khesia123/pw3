/* IMPORT DO SEQUELIZE */
const Sequelize = require('sequelize');

/* IMPORT DA CONEXÃO */
const connection = require('../database/database');

/*
CRIAÇÃO DO MODELO DA TABELA CATEGORIA
MÉTODO: define
PARAMETROS:
1 - NOME DA TABELA - STRING
2 - JSON: REPRESENTA O CAMPO OU CAMPOS DA TABELA, SEUS TIPOS E SUAS  REGRAS.
*/
const Cliente = connection.define(
    'tbl_cliente',
    {
        nm_cliente:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

// Categoria.sync({force:true});

module.exports = Cliente;
