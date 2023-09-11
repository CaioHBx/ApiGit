const mysql = require('mysql2');
const fs = require('fs');

// Configure as informações de conexão com o seu banco de dados MariaDB
const connection = mysql.createConnection({
  host: '149.100.155.204',
  user: 'u902540143_safra',
  password: 'H?^$|[cJ!9$w',
  database: 'u902540143_safra',
});

// Conecte-se ao banco de dados
connection.connect();

// Consulta para obter informações sobre as tabelas do banco de dados
const query = 'SHOW TABLES';

connection.query(query, (err, results) => {
  if (err) {
    console.error('Erro ao consultar o banco de dados:', err);
    return;
  }

  const tables = results.map((row) => row[`Tables_in_${connection.config.database}`]);

  const databaseMetadata = {};

  // Consulta para obter informações sobre cada tabela
  const tableQueries = tables.map((table) => {
    return new Promise((resolve) => {
      connection.query(`DESCRIBE ${table}`, (err, fields) => {
        if (!err) {
          databaseMetadata[table] = fields;
        }
        resolve();
      });
    });
  });

  Promise.all(tableQueries).then(() => {
    // Feche a conexão com o banco de dados
    connection.end();

    // Salve os metadados do banco de dados em um arquivo JSON
    const jsonMetadata = JSON.stringify(databaseMetadata, null, 2);
    fs.writeFileSync('database_metadata.json', jsonMetadata);

    console.log('Metadados do banco de dados salvos em database_metadata.json');
  });
});