const db = require('../database/queries')

const getDiarios = async () => {
  return (await db.query('select nomediscip, nomealuno, nota, falta from diarios order by nomealuno;')).rows
};

//@ Tenho que implementar está rotina
const UpdateDiarios  = async(id, name, email) => {
  console.log("Valor id:", id);
  let linhasAfetadas = (await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id])).rowCount;

  console.log('Linhas afetadas:', linhasAfetadas);
  return;
};


  module.exports = {
    getDiarios,
    UpdateDiarios,
  }