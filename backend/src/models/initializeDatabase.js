import fs from 'fs';
import path from 'path';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { connection } from './connection.js';

const initDB = async () => {
    try {
        // Use import.meta.url para obter o diretório do módulo atual
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        
        // Corrija o caminho para o arquivo .sql
        const sqlFile = path.resolve(__dirname, '../sql/init-db.sql');
        console.log(`Loading SQL file from: ${sqlFile}`); // Adicione um log para depuração

        // Certifique-se de que o caminho está correto
        if (!fs.existsSync(sqlFile)) {
            throw new Error(`SQL file does not exist at path: ${sqlFile}`);
        }

        const sql = fs.readFileSync(sqlFile, 'utf8');

        // Crie uma nova conexão para o banco de dados principal
        const dbConnection = await connection.getConnection();

        // Executa o SQL
        await dbConnection.query(sql);
        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing the database:', error);
    }
};

initDB();